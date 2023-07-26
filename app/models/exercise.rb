class Exercise < ApplicationRecord
  belongs_to :blueprint
  has_many :exercise_sets, dependent: :destroy

  def self.create_exercise(blueprint_id, workout_id, sets, user_id)
    @blueprint = Blueprint.find(blueprint_id)
    exercises = @blueprint.exercises.where(workout_id: nil)
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
          user_id: user_id
        )
      sets.times do
        ExerciseSet.create_exercise_sets new_exercise["id"],
                                         user_id,
                                         weight,
                                         reps
      end
    end
  end

  def set_weight_and_reps(user_id)
    @weight = 5
    @reps = 8
    exercise =
      Exercise.where(name: name, user_id: user_id).order(:created_at).last
    if exercise
      @weight_success_rate = 0
      @reps_success_rate = 0
      sets =
        ExerciseSet.where(exercise_id: exercise.id).where.not(completed_at: nil)
      sets.each do |set|
        @weight_success_rate += set[:weight] <=> exercise[:weight]
        @reps_success_rate += set[:reps] <=> exercise[:reps]
      end

      if @weight_success_rate == 0 && @reps_success_rate == 0
        if exercise[:reps] < 10
          @reps = exercise[:reps] + 1
        elsif exercise[:reps] >= 10
          @weight = exercise[:weight] + 2.5
          @reps = 8
        end
      elsif @weight_success_rate > 0 || @reps_success_rate > 0
        # rounds weight down to the closest 0.5 or 0.0
        @weight = (sets.average(:weight) * 2).floor.to_f / 2
        @reps = sets.average(:reps).floor
      elsif @weight_success_rate < 0 || @reps_success_rate < 0
        if -(@weight_success_rate) / sets.count.to_f > 0.5
          @weight = (sets.average(:weight) * 2).floor.to_f / 2
          @reps = sets.average(:reps).floor
        else
          @weight = exercise[:weight]
          @reps = exercise[:reps]
        end
      end
    end
    { weight: @weight, reps: @reps }
  end
end
