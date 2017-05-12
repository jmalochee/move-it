class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  helper_method :current_user, :user_signed_in

  def show
  end

  def index # just an unused endpoint serving up :current_user
  end

  def create
    body = request.body.read
    parsed = JSON.parse(body)
    user = User.new(parsed)
    if user.save
      sign_in(user)
      render json: { message: ["registration successful!"], email: user.email }
    else
      return root_path
    end
  end

  def sign_in(user)
    session[:user_id] = user.id
  end

  def sign_out
    session.delete(:user_id)
    @current_user = nil
  end

  def user_signed_in?
    !current_user.nil?
  end

end
