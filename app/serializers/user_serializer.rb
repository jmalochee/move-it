class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  methods :phone_neat
  has_many :moves
end
