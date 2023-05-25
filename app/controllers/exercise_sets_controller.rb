class ExerciseSetsController < ApplicationController
   # update not working need to fix!!!!!! getting no content 204
   
    def update
        exercise_set = ExerciseSet.find(params[:id])
        exercise_set.update!(exercise_set_params)
        render json: exercise_set

    end
    private
    def exercise_set_params
        params.permit(:reps, :weight, :completed_at)
    end
end
