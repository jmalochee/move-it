class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone
  has_many :moves
end
