class WorkoutsController < ApplicationController
  def create
    # need to add a check for sets. Is it an appropriate number?
    blueprint = Blueprint.find(params[:blueprint_id])
    workout = Workout.create!(name: blueprint.name, user_id: session[:user_id])
    Exercise.create_exercise blueprint[:id],
                             workout[:id],
                             params[:sets],
                             session[:user_id]
    render json: workout, include: %w[exercises exercises.exercise_sets]
  end

  def index
    workout =
      Workout
        .where(user_id: session[:user_id])
        .where.not(completed_at: nil)
        .order(:completed_at)
    render json: workout, include: %w[exercises exercises.exercise_sets]
  end

  def current
    workout =
      Workout
        .where(user_id: session[:user_id], completed_at: nil)
        .order(:created_at)
        .last
    if workout
      render json: workout, include: %w[exercises exercises.exercise_sets]
    else
      head :permanent_redirect
    end
  end

  def update
    workout = Workout.find(params[:id])
    workout.update(workout_params)
    render json: workout, include: %w[exercise_sets exercise_sets.exercise]
  end

  def destroy
    Workout.find(params[:id]).destroy
    head :no_content
  end

  private

  def workout_params
    params.permit(:name, :completed_at, :user_id)
  end
end
