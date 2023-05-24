class UserExerciseSetsSerializer < ActiveModel::Serializer
  attributes :id
  has_many :workouts
end
