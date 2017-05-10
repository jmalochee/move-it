class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  helper_method :current_user, :user_signed_in

  def show
    binding.pry

  end

  def create
    body = request.body.read
    parsed = JSON.parse(body)
    user = User.new(parsed)
    if user.save
      sign_in(user)
      render json: { message: ["registration successful!"] }
    else
      i = 0
      errors = {}
      user.errors.each do |k,v|
        errors[k] = user.errors.full_messages[i]
        i += 1
      end
      render json: { errors: errors }
    end
  end

  def current_user
    if session[:user_id]
      @current_user ||= User.find(session[:user_id])
    end
  end

  def auth_nav
    session[:auth_path] = request.path
  end

  def auth_path
    if session[:auth_path].present?
      auth_path = session[:auth_path]
      session.delete(:auth_path)
      return auth_path
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
