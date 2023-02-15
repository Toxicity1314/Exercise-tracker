class CreateReps < ActiveRecord::Migration[7.0]
  def change
    create_table :reps do |t|
      t.integer :quantity
      t.float :weight
      t.belongs_to :exercise, null: false, foreign_key: true
      t.belongs_to :workout, null: false, foreign_key: true
      t.boolean :successful

      t.timestamps
    end
  end
end
