class Api::V1::LikesController < ApplicationController
    before_action :current_user
    def create
        @like = current_user.likes.create(post_id: params[:post_id])
        render json: {like: @like}
    end

    def destroy
        @like = Like.find_by(post_id: params[:post_id], user_id: current_user.id)
        @like.destroy
        render json: {unlike: true}
    end
end
