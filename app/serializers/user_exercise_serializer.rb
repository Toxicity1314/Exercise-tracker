class UserExerciseSerializer < ActiveModel::Serializer
  attributes :id, :weight, :reps, :success
  has_one :workout
  has_one :exercise
  has_one :user
end
