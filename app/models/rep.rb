class Rep < ApplicationRecord
    belongs_to :exercise
    belongs_to :workout

    def self.create_reps blueprint_id, workout_id, user_id
        @blueprint = Blueprint.find(blueprint_id)
        exercises = @blueprint.exercises
        exercises.each do |exercise|
            @quantity = 8
            @weight =5
            
            workout = Workout.where(user_id: user_id, name: @blueprint[:name]).where.not(completed_at: nil).order(:completed_at).last
            if workout

                old_exercise = workout.reps.find_by(exercise_id: exercise[:id])
                if old_exercise[:successful]
                    if old_exercise[:quantity] <10
                        
                        @quantity = old_exercise[:quantity] +1
                        @weight = old_exercise[:weight]
                    else
                        @quantity = 8
                        @weight = old_exercise[:weight] + 2.5
                    end
                end
            end
            
            self.create!(quantity: @quantity, weight: @weight, exercise_id:exercise[:id], workout_id: workout_id)
        end
    end
end
