class ExerciseSetsController < ApplicationController
  rescue_from ArgumentError, with: :render_invalid

  def update
    exercise_set = ExerciseSet.find(params[:id])
    exercise_set.update!(exercise_set_params)
    exercise_set.update_status
    render json: exercise_set, status: :created
  end

  private

  def exercise_set_params
    params.permit(:reps, :weight, :completed_at, :status)
  end

  def render_invalid(invalid)
    render json: { errors: invalid }, status: :unprocessable_entity
  end
end
