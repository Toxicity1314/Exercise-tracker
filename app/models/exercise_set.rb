class ExerciseSet < ApplicationRecord
    belongs_to :exercise
  
    
    # exercises have the same id as the last time you did that workout

    def self.create_exercise_sets exercise_id
        # @blueprint = Blueprint.find(blueprint_id)
        # exercises = @blueprint.exercises
        # exercises.each do |exercise|
            @reps = 8
            @weight =5
                ExerciseSet.create!(reps: @reps, weight: @weight, exercise_id: exercise_id)
                ExerciseSet.create!(reps: @reps, weight: @weight, exercise_id: exercise_id)
                ExerciseSet.create!(reps: @reps, weight: @weight, exercise_id: exercise_id)
        # end
    end
end
