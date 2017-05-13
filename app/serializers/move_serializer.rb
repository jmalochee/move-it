class MoveSerializer < ActiveModel::Serializer
  def arrtibutes
    object.attributes.symbolize_keys
  end

  belongs_to :user
end
