class Api::V1::PostsController < ApplicationController
    before_action :authenticate!, only: [:create, :destroy]

    def index
        @posts = current_user.posts.order(created_at: :desc)
        render json: @posts
    end

    def show
        @post = Post.find(params[:id])
        @user = @post.user
        render json: {post: @post, user: @user}
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
            params.permit(:title, :content)
        end
end
