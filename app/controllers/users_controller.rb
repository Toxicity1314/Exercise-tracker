class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :show]
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find(session[:user_id])
        render json: user
      
    end

    private 

    def user_params
        params.permit(:username, :password)
    end

end
