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

  def update
    body = request.body.read
    parsed = JSON.parse(body)
    if current_user.moves.find(params[:id])
      move = Move.find(params[:id])
      move.update_attributes(parsed)
      render json: { move: move, status: 200 }
    else
      render json: { status: 403 }
    end

  end

  def edit
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

    if current_user.moves.find_by(id: params[:id])
      move = Move.find(params[:id])
    end

    render json: { move: move, options: options }

  end

  def show
    if current_user.moves.find_by(id: params[:id])
      move = Move.find(params[:id])
      render json: move
    end
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
