class ExerciseSerializer < ActiveModel::Serializer
  attributes :id,
             :blueprint_id,
             :name,
             :pic_url,
             :workout_id,
             :instructions,
             :weight,
             :reps
  has_many :exercise_sets
end
