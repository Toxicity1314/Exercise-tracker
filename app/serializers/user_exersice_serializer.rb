class UserExersiceSerializer < ActiveModel::Serializer
  attributes :id, :weight, :reps, :success
  has_one :workout
  has_one :exersice
  has_one :user
end
