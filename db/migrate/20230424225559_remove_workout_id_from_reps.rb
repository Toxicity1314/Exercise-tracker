class RemoveWorkoutIdFromReps < ActiveRecord::Migration[7.0]
  def change
    change_table :reps do |t|
      t.remove :workout_id
    end
  end
end
