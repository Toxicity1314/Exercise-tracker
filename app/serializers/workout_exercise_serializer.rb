class WorkoutExerciseSerializer < ActiveModel::Serializer
  attributes :id
  has_one :workout
  has_one :exercise
end
