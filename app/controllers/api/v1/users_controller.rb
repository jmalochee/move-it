class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
  end

  def create
    body = request.body.read
    parsed = JSON.parse(body)
    user = User.new(parsed)
    #   first_name: first_name,
    #   last_name: last_name,
    #   email: ,
    #   password: ,
    #   password_confirmation:
    # )
    if user.save
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

end
