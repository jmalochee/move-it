class Api::V1::MovesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    body = request.body.read
    parsed = JSON.parse(body)
    binding.pry
    move = Move.new(parsed)
    if move.save
      binding.pry
      render json: { message: ["move created successfully!"], move_id: move.id }
    else
      render json: { errors: report(move.errors) }
    end
  end
end
