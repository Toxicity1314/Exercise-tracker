class Exercise < ApplicationRecord
    belongs_to :blueprint
    has_many :exercise_sets, dependent: :destroy

    def self.create_exercise blueprint_id, workout_id, user_id
        @blueprint = Blueprint.find(blueprint_id)
        exercises = @blueprint.exercises.where(workout_id: nil)
        exercises.each do |exercise|
            new_exercise = Exercise.create!(name: exercise["name"], instructions: exercise["instructions"], blueprint_id: exercise["blueprint_id"], pic_url: exercise["pic_url"], workout_id: workout_id)
            ExerciseSet.create_exercise_sets new_exercise["id"], user_id
        end
    end
    

end
