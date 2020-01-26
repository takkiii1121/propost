class Api::V1::PostsController < ApplicationController
    before_action :authenticate!, only: [:create, :destroy]
    before_action :current_user
    before_action :correct_user, only: [:destroy]

    def index
        @posts = Post.order(created_at: :desc)
        if current_user != nil
            render json: {posts: @posts, isAuthenticate: true}
        else
            render json: {posts: @posts, isAuthenticate: false}
        end
    end

    def show
        @post = Post.find(params[:id])
        @user = @post.user
        if current_user != nil
            render json: {post: @post, user: @user, isAuthenticate: true}
        else
            render json: {post: @post, user: @user, isAuthenticate: false}
        end
    end

    def create 
        @post = current_user.posts.build(post_params)
        if @post.save
            render json: {posted: true}
        else
            render json: {posted: false}
        end
    end


    def destroy
        @post.destroy
        render json: {destroy: true, post: @post, current_user: @current_user}
    end

    private
        
        def post_params
            params.permit(:content, :title)
        end

        def correct_user
            @post = current_user.posts.find_by(id: params[:id])
            unless @post
                render json: {destroy: false, post: @post, current_user: nil}
            end
        end
end
