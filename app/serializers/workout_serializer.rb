class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :completed_at
  has_many :exercises
end
