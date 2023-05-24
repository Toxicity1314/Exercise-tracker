class RenameRepsTable < ActiveRecord::Migration[7.0]
  def change
    rename_table :reps, :exercise_sets
    rename_column :exercise_sets, :quantity, :reps
  end
end
