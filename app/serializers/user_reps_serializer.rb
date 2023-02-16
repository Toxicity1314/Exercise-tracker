class UserRepsSerializer < ActiveModel::Serializer
  attributes :id
  has_many :workouts
end
