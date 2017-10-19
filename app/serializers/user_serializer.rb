class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :avatar, :phone_neat
  has_many :moves, serializer: MoveListSerializer
end
