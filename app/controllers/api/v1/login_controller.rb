class Api::V1::LoginController < ApplicationController

  def login
    login_user = User.find_by(email: params[:email])
    if login_user && login_user.authenticate(params[:password])
      login_user.token = create_token
      login_user.token_expire = DateTime.now + 1
      login_user.save
      render json: {user: login_user, isAuthenticated: true}
    else
      render json: {user: 'no auth', isAuthenticated: false}
    end
  end


  def logout
    @user = User.find(params[:id])
    if @user.token != "" && @user.token_expire != ""
      @user.token = ""
      @user.token_expire = ""
      @user.save
      render json: @user
    else
      render json: @user.error
    end
  end

  

  private
    def create_token
      return ((0..9).to_a + ("a".."z").to_a + ("A".."Z").to_a).sample(50).join
    end
end
