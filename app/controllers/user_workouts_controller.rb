class UserWorkoutsController < ApplicationController
    def create
        # user_workout = UserWorkout.create!(workout_id: params[:id], user_id: session[:user_id])
        params[:exercises].each do |e|
            debugger
            weight = UserExercise.generate_weight e.id, session[:user_id]
            UserExercise.create!(exercise_id: e.id, user_workout_id: user_workout[:id], weight: weight)
        end
        # render json: workouts
    end
end


session[:current_workout] += 1
        params["_json"].each do |exercise|
            user = session[:user_id]
            exercise = exercise[:exercise_id]
            current_workout = session[:current_workout] 
            weight = UserExercise.generate_weight exercise, user
            4.times do
            UserExercise.create!(workout_number: current_workout, exercise_id: exercise, user_id: user, weight: weight, reps: 8)
            end