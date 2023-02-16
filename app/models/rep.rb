class Rep < ApplicationRecord
    belongs_to :exercise
    belongs_to :workout

    def self.create_reps blueprint_id, workout_id
        exercises = Blueprint.find(blueprint_id).exercises
        exercises.each do |exercise|
            self.create!(quantity: 8, weight: 5, exercise_id:exercise[:id], workout_id: workout_id, successful: false)
        end
    end
end
