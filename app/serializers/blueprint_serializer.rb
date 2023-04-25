class BlueprintSerializer < ActiveModel::Serializer
  attributes :id, :name, :exercises
  has_many :exercises
  #look into how object. works
  def exercises
    object.exercises.where(workout_id: nil)
  end
end
