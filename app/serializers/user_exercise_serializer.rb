class UserExerciseSerializer < ActiveModel::Serializer
  attributes :id, :weight, :reps, :success, :workout_number
  has_many :exercise
end
