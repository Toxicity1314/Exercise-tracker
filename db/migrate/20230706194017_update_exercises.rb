class UpdateExercises < ActiveRecord::Migration[7.0]
  def change
    change_table :exercises do |t|
      t.float :weight, null: false
      t.integer :reps, null: false
      t.belongs_to :user, foreign_key: true
    end
  end
end
