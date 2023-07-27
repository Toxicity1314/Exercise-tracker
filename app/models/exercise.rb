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
        ExerciseSet.create_exercise_sets new_exercise["id"], user_id
      end
    end
  end

def set_weight_and_reps(user_id)
    # debugger
    exercise =
      Exercise.where(name: name, user_id: user_id).order(:created_at).last
    if exercise
      sets =
        ExerciseSet.where(exercise_id: exercise.id).where.not(completed_at: nil)
      if sets.all? { |set|
           set[:weight] == exercise.weight && set[:reps] == exercise.reps
         }
        return { weight: exercise.weight, reps: exercise.reps += 1 }
      else
        return { weight: 100, reps: 100 }
      end
    else
      return { weight: 20, reps: 80 }
    end
  end
end
