class CreateWorkouts < ActiveRecord::Migration[7.0]
  def change
    create_table :workouts do |t|
      t.string :name
      t.string :muscle_groups

      t.timestamps
    end
  end
end
