class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone_neat
  has_many :moves
end
