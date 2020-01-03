class Api::V1::PostsController < ApplicationController
    def index
        @posts = Post.order(created_at: :desc)
        render json: @posts
    end

    def show
        @post = Post.find(params[:id])
        @user = @post.user
        render json: {post: @post, user: @user}
    end

    def create 
        @post = Post.new(post_params)
        if @post.save
            render json: @post
        else
            render json: @post.errors
        end
    end

    def update
        @post = Post.find(params[:id])
        @post.update_attributes(post: params[:post])
        render json: @post
    end

    def destroy
        @post = Post.find(params[:id])
        if @post.destroy
            head :no_content, status: :ok
        else
            render json: @post.errors, status: :unprocessable_entity
        end
    end

    private
        
        def post_params
            params.permit(:title, :content)
        end
end
