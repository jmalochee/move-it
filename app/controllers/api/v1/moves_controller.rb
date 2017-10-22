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
    @move = Move.find(params[:id])
    # render json: { moves: current_user.moves }
    render json: @move
  end

  def new
    def transform (options)
      array = []
      options.each{|k,v| array << {id:k, name:v} }
      array
    end

    options = {
        states: transform(Move::US_STATES),
        access: transform(Move::ACCESS_OPTIONS),
        truck_access: transform(Move::TRUCK_ACCESS_OPTIONS)
    }

    move = Move.new

    render json: { move: move, options: options }
  end

end
