class Rep < ApplicationRecord
    belongs_to :exercise
  
    
    # exercises have the same id as the last time you did that workout

    def self.create_reps exercise_id
        # @blueprint = Blueprint.find(blueprint_id)
        # exercises = @blueprint.exercises
        # exercises.each do |exercise|
            @quantity = 8
            @weight =5
                Rep.create!(quantity: @quantity, weight: @weight, exercise_id: exercise_id)
                Rep.create!(quantity: @quantity, weight: @weight, exercise_id: exercise_id)
                Rep.create!(quantity: @quantity, weight: @weight, exercise_id: exercise_id)
        # end
    end
end
