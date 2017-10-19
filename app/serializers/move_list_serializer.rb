class MoveListSerializer < ActiveModel::Serializer
  attributes :id, :move_date, :orig_city, :orig_state, :dest_city, :dest_state
  belongs_to :user
end
