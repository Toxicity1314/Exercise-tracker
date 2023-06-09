class ExerciseSerializer < ActiveModel::Serializer
    attributes :id, :blueprint_id, :name, :pic_url, :workout_id, :instructions
    has_many :exercise_sets
  end
  