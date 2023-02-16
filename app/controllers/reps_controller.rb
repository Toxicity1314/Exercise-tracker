class RepsController < ApplicationController
    def update
        rep = Rep.find(params[:id])
        rep.update(rep_params)
    end
    private
    def rep_params
        params.permit(:quantity, :weight, :successful)
    end
end
