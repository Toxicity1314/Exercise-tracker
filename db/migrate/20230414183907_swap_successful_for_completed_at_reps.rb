class SwapSuccessfulForCompletedAtReps < ActiveRecord::Migration[7.0]
  def change
    change_table :reps do |t|
    t.datetime :completed_at
    t.remove :successful
    end
  end
end
