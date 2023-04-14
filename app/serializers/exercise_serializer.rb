class ExerciseSerializer < ActiveModel::Serializer
    attributes :id, :name, :instructions
    has_many :reps
  end
  