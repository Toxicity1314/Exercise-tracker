class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    before_action :authorized


    def authorized
        return render json:{error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    end

private
    def render_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
