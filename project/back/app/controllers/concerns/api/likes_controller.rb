class Api::LikesController < ApplicationController
    before_action :current_user

    def create
        @post = Post.find(params[:id])
        current_user.favorite(@post)
        if current_user.already_liked?(@post)
            render json: {like: true}
        else
            render json: {like: false}
        end
    end

    def destroy
        @post = Post.find(params[:id])
        current_user.unfavorite(@post)
        if current_user.already_liked?(@post)
            render json: {like: true}
        else
            render json: {like: false}
        end
    end

end
