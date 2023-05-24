class ExerciseSetSerializer < ActiveModel::Serializer
  attributes :id, :reps, :weight, :completed_at
end
