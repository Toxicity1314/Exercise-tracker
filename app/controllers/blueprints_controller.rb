class BlueprintsController < ApplicationController
  def index
    blueprints = Blueprint.all
    render json: blueprints
  end
end
