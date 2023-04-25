class WorkoutsController < ApplicationController
    def create
        workout = Workout.create!(name: params[:name], user_id: session[:user_id])
        Exercise.create_exercise params[:id], workout[:id], session[:user_id]
        #Rep.create_reps params[:id], workout[:id], session[:user_id]

        render json: workout, include: ['exercises', 'exercises.reps']
    end

    # def index
    #     workout = Workout.where(user_id: session[:user_id]).where.not(completed_at: nil).order(:completed_at)
    #     render json: workout, include: ['reps', 'reps.exercise']
    # end

    def current
        workout = Workout.where(user_id: session[:user_id], completed_at: nil).order(:created_at).last
        if workout
            render json: workout #,  include: ['exercises', 'exercises.reps']
        else
            head :permanent_redirect
        end
    end

    # def update
    #     workout = Workout.find(params[:id])
    #     workout.update(workout_params)
    #     render json: workout, include: ['reps', 'reps.exercise']
    # end

    def destroy
        Workout.find(params[:id]).destroy
        head :no_content
    end

    private
    def workout_params
        params.permit(:name, :completed_at, :user_id)
    end

end
