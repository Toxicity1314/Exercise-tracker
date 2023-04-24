class RepSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :weight, :completed_at
  #has_one :exercise
end
