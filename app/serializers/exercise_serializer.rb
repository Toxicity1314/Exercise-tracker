class ExerciseSerializer < ActiveModel::Serializer
    attributes :id, :name, :pic_url, :instructions
    has_many :reps
  end
  