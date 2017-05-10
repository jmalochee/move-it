class Api::V1::UsersController < ApplicationController
  before_action :force_load_session
  protect_from_forgery unless: -> { request.format.json? }

  def force_load_session
    session[:init] = true
  end

  def show
    binding.pry
    if user_signed_in?
      render json: { current_user: current_user.email }
    else
      render json: { current_user: "bob" }
    end

  end

  def index # just an unused endpoint serving up :current_user
    binding.pry
    if user_signed_in?
      render json: { current_user: current_user }
    else
      render json: { current_user: {} }
    end
  end

  def create
    body = request.body.read
    parsed = JSON.parse(body)
    user = User.new(parsed)
    if user.save
      sign_in(user)
      binding.pry
      render json: { message: ["registration successful!"], email: user.email }
    else
      render json: { errors: report(user.errors) }
    end
  end

  def currentUser
    render json: current_user
  end

end
