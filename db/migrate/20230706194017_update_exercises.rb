class UpdateExercises < ActiveRecord::Migration[7.0]
  def change
    change_table :exercises do |t|
      t.float :weight, null: false, default: 5.0
      t.integer :reps, null: false, default: 8
      t.belongs_to :user, foreign_key: true
    end
    reversible do |dir|
      dir.up do
        change_column_default :exercises, :weight, from: nil, to: 5.0
        change_column_default :exercises, :reps, from: nil, to: 8
      end

      dir.down do
        change_column_default :exercises, :weight, from: 5.0, to: nil
        change_column_default :exercises, :reps, from: 8, to: nil
      end
    end
  end
end
