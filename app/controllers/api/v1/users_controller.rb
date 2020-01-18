class Api::V1::UsersController < ApplicationController
    before_action :authenticate_token, only: [:index, :show]
    before_action :authenticate!, only: [:update]
    before_action :current_user

    def index
        @users = User.order(created_at: :desc)
        if current_user != nil
            render json: {users: @users, isAuthenticate: true}
        else
            render json: {users: @users, isAuthenticate: false}
        end
    end

    def show
        @user = User.find(params[:id])
        @posts = @user.posts.order(created_at: :desc)
        if current_user != nil
            render json: {user: @user, posts: @posts, isAuthenticate: true}
        else
            render json: {user: @user, posts: @posts, isAuthenticate: false}
        end
    end

    def create 
        @user = User.new(user_params)
        if @user.save
            render json: @user
        else
            render json: @user.errors
        end
    end

    def me
        render json: @current_user
    end

    


    private
        
        def user_params
            params.permit(:name, :email, :password, :password_confirmation, :description)
        end

        def authenticate_token
            time = DateTime.now
            @users = User.where.not(token: "")
            @users.each do |user|
                if user.token_expire < time && user.token != ""
                    user.token = nil
                    user.token_expire = ""
                    user.save
                end
            end
        end
end
