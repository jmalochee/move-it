class Api::V1::MovesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    body = request.body.read
    parsed = JSON.parse(body)
    move = Move.new(parsed)
    if move.save

      render json: { message: ["move created successfully!"], move_id: move.id }
    else
      render json: { errors: report(move.errors) }
    end
  end

  def index

  end

  def show
    render json: { moves: current_user.moves }
  end
end
