class UserExercisesController < ApplicationController

    def create
        session[:current_workout] += 1
        params["_json"].each do |exercise|
            user = session[:user_id]
            exercise = exercise[:exercise_id]
            current_workout = session[:current_workout] 
            weight = UserExercise.generate_weight exercise, user

            UserExercise.create!(workout_number: current_workout, exercise_id: exercise, user_id: user, weight: weight, reps: 4)
        end
        
        head :created
    end

    def current
        current_workout = UserExercise.where(workout_number: session[:current_workout])
        render json: current_workout

    end
end
