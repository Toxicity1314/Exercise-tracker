class CreateWorkouts < ActiveRecord::Migration[7.0]
  def change
    create_table :workouts do |t|
      t.string :name
      t.belongs_to :user, null: false, foreign_key: true
      t.datetime :completed_at

      t.timestamps
    end
  end
end
