class Exercise < ApplicationRecord
  belongs_to :blueprint
  has_many :exercise_sets, dependent: :destroy

  def self.create_exercise(blueprint_id, workout_id, sets, user_id)
    sets = 3
    @blueprint = Blueprint.find(blueprint_id)
    exercises = @blueprint.exercises.where(workout_id: nil)
    exercises.each do |exercise|
      weight = 5
      reps = 8
      new_exercise =
        Exercise.create!(
          name: exercise["name"],
          instructions: exercise["instructions"],
          blueprint_id: exercise["blueprint_id"],
          pic_url: exercise["pic_url"],
          workout_id: workout_id,
          weight: weight,
          reps: reps
        )
      sets.times do
        ExerciseSet.create_exercise_sets new_exercise["id"], user_id
      end
    end
  end
end
