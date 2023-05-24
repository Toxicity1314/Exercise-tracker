class AddWorkoutIdToExercises < ActiveRecord::Migration[7.0]
  def change
    change_table :exercises do |t|
      t.belongs_to :workout
    end
  end
end
