class RepSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :weight, :successful
  belongs_to :exercise
end
