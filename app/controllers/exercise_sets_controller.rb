class ExerciseSetsController < ApplicationController
    def update
        exercise_set = ExerciseSet.find(params[:id])
        exercise_set.update(exercise_set_params)
    end
    private
    def exercise_set_params
        params.permit(:reps, :weight, :successful)
    end
end
