class ExerciseSerializer < ActiveModel::Serializer
    attributes :id, :blueprint_id, :name, :pic_url, :workout_id
    has_many :reps
  end
  