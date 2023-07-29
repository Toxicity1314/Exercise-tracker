class Exercise < ApplicationRecord
  belongs_to :blueprint
  has_many :exercise_sets, dependent: :destroy

  def self.create_exercise(blueprint_id, workout_id, sets, user_id)
    blueprint = Blueprint.find(blueprint_id)
    exercises = blueprint.exercises.where(workout_id: nil)
    exercises.each do |exercise|
      weight, reps =
        exercise.set_weight_and_reps(user_id).values_at(:weight, :reps)

      new_exercise =
        Exercise.create!(
          name: exercise["name"],
          instructions: exercise["instructions"],
          blueprint_id: exercise["blueprint_id"],
          workout_id: workout_id,
          weight: weight,
          reps: reps,
          user_id: user_id,
          pic_url: exercise["pic_url"]
        )
      sets.times do
        ExerciseSet.create_exercise_sets new_exercise["id"],
                                         user_id,
                                         weight,
                                         reps
      end
    end
  end
  #The set_weight_and_reps function returns an object containing a weight and reps key. The values for these keys are assigned as follows
  #If the user has never done this exercise before weight is automatically set to 5 and reps is automatically set to 8.
  #If a user has done this exercise before then the comparison operator is utilized to keep track of how many sets were done below
  #the exercise values, above the exercise values, or at the same values. If both @weight_success_rate and reps_success_rate = 0 then increase
  #the reps by 1 unless reps >=10 then increase weight by 2.5 and reset reps to 8. If @weight_success_rate or reps_success_rate
  #are > 0 then get the average of the previous exercise set group and set weight and reps to there respective averages. If
  #@weight_success_rate or reps_success_rate < 0 but the user still completes at least half the sets at or above the exercise criteria
  #weight and reps get set to the previous exercise weight and reps. If the user failed more than half the previous sets
  #then weight and reps get set to the previous exercise sets averages.
  def set_weight_and_reps(user_id)
    weight = 5
    reps = 8

    exercise =
      Exercise.where(name: name, user_id: user_id).order(:created_at).last
    return { weight: 5, reps: 8 } if !exercise
    weight_success_rate = 0
    reps_success_rate = 0
    sets =
      ExerciseSet.where(exercise_id: exercise.id).where.not(completed_at: nil)
    sets.each do |set|
      weight_success_rate += set[:weight] <=> exercise[:weight]
      reps_success_rate += set[:reps] <=> exercise[:reps]
    end

    if weight_success_rate == 0 && reps_success_rate == 0
      if exercise[:reps] < 10
        reps = exercise[:reps] + 1
      elsif exercise[:reps] >= 10
        weight = exercise[:weight] + 2.5
        reps = 8
      end
    elsif weight_success_rate > 0 || reps_success_rate > 0
      # rounds weight down to the closest 0.5 or 0.0
      weight = (sets.average(:weight) * 2).floor.to_f / 2
      reps = sets.average(:reps).floor
    elsif weight_success_rate < 0 || reps_success_rate < 0
      if -(weight_success_rate) / sets.count.to_f > 0.5 ||
           -(reps_success_rate) / sets.count.to_f > 0.5
        weight = (sets.average(:weight) * 2).floor.to_f / 2
        reps = sets.average(:reps).floor
      else
        weight = exercise[:weight]
        reps = exercise[:reps]
      end
    end
    { weight: weight, reps: reps }
  end
end
