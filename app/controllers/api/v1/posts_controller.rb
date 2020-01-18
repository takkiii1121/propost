class Api::V1::PostsController < ApplicationController
    before_action :authenticate!, only: [:create, :destroy]
    before_action :current_user

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
            render json: @post
        else
            render json: @post.errors
        end
    end


    def destroy
        @post = current_user.posts.find_by(id: params[:id])
        if @post.destroy
            head :no_content, status: :ok
        else
            render json: @post.errors, status: :unprocessable_entity
        end
    end

    private
        
        def post_params
            params.permit(:content, :title)
        end
end
