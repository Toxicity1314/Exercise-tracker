class BlueprintSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :exercises
end
