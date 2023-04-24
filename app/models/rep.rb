class Rep < ApplicationRecord
    belongs_to :exercise
    belongs_to :workout
    # try creating new exercise that creates new reps currently each time you create a new workout the 
    # exercises have the same id as the last time you did that workout

    def self.create_reps blueprint_id, workout_id, user_id
        @blueprint = Blueprint.find(blueprint_id)
        exercises = @blueprint.exercises
        exercises.each do |exercise|
            @quantity = 8
            @weight =5
                Rep.create!(quantity: @quantity, weight: @weight, exercise_id:exercise[:id], workout_id: workout_id)
                Rep.create!(quantity: @quantity, weight: @weight, exercise_id:exercise[:id], workout_id: workout_id)
        end
    end
end
