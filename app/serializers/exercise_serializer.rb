class ExerciseSerializer < ActiveModel::Serializer
    attributes :id, :blueprint_id, :name, :pic_url
    has_many :reps
  end
  