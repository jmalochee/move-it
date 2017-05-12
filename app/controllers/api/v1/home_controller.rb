class Api::V1::HomeController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless: -> { request.format.json? }

  def index
    binding.pry
    if user_signed_in?
      render json: { current_user: current_user.email }
    else
      render json: { current_user: "bob" }
    end

  end

  # def index #just an unused endpoint serving up :current_user
  #   if user_signed_in?
  #     render json: { current_user: current_user }
  #   else
  #     render json: { current_user: {} }
  #   end
  # end
  #
  # def create
  #   body = request.body.read
  #   parsed = JSON.parse(body)
  #   user = User.new(parsed)
  #   if user.save
  #     sign_in(user)
  #     render json: { message: ["registration successful!"], current_user: user }
  #   else
  #     i = 0
  #     errors = {}
  #     user.errors.each do |k,v|
  #       errors[k] = user.errors.full_messages[i]
  #       i += 1
  #     end
  #     render json: { errors: errors }
  #   end
  # end
  #


end