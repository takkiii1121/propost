class Api::V1::UsersController < ApplicationController
    def index
        @users = User.order(created_at: :desc)
        render json: @users
    end

    def show
        @user = User.find(params[:id])
        render json: @user
    end

    def create 
        @user = User.new(user_params)
        if @user.save
            render json: @user
        else
            render json: @user.errors
        end
    end

    def update
        @user = User.find(params[:id])
        @user.update_attributes(user: params[:user])
        render json: @user
    end

    def destroy
        @user = User.find(params[:id])
        if @user.destroy
            head :no_content, status: :ok
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end

    private
        
        def user_params
            params.permit(:name, :email, :password, :password_confirmation, :description)
        end
end
