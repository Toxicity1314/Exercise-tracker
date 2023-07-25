require "rails_helper"

RSpec.describe Exercise, type: :model do
  describe "create_exercise" do
    let(:user) { User.create(username: "Sean", password: "1234") }
    let(:workout_id) { 1 }
    let(:sets) { 1 }
    let(:blueprint) { Blueprint.create(name: "Shoulder Abs") }

    before do
      less_than_half_unsuccessful =
        Exercise.create(
          blueprint_id: blueprint[:id],
          name: "Side Lateral Raise",
          instructions:
            "Pick a couple of dumbbells and stand with a straight torso and the dumbbells by your side at arms length with the palms of the hand facing you. This will be your starting position. While maintaining the torso in a stationary position (no swinging), lift the dumbbells to your side with a slight bend on the elbow and the hands slightly tilted forward as if pouring water in a glass. Continue to go up until you arms are parallel to the floor. Exhale as you execute this movement and pause for a second at the top. Lower the dumbbells back down slowly to the starting position as you inhale. Repeat for the recommended amount of repetitions. Variation: This exercise can also be performed sitting down.",
          weight: 6,
          reps: 9,
          user_id: user[:id]
        )
      2.times do
        ExerciseSet.create(
          weight: 6,
          reps: 9,
          exercise_id: less_than_half_unsuccessful.id,
          completed_at: DateTime.now,
          user_id: user[:id]
        )
        ExerciseSet.create(
          weight: 4,
          reps: 7,
          exercise_id: less_than_half_unsuccessful.id,
          completed_at: DateTime.now,
          user_id: user[:id]
        )
      end

      previous_exercise_unsuccessful_half_or_more =
        Exercise.create(
          blueprint_id: blueprint[:id],
          name: "Dumbbell side bend",
          instructions:
            "Stand up straight while holding a dumbbell on the left hand (palms facing the torso) as you have the right hand holding your waist. Your feet should be placed at shoulder width. This will be your starting position. While keeping your back straight and your head up, bend only at the waist to the right as far as possible. Breathe in as you bend to the side. Then hold for a second and come back up to the starting position as you exhale. Tip: Keep the rest of the body stationary. Now repeat the movement but bending to the left instead. Hold for a second and come back to the starting position. Repeat for the recommended amount of repetitions and then change hands. Caution: Refrain from using this exercise if your obliques tend to grow easily as wide obliques take away from your symmetry. Variations: You can also do this exercise while seating on a bench or with a barbell.",
          weight: 5,
          reps: 10,
          user_id: user[:id]
        )
      4.times do
        ExerciseSet.create(
          weight: 4,
          reps: 7,
          exercise_id: previous_exercise_unsuccessful_half_or_more.id,
          completed_at: DateTime.now,
          user_id: user[:id]
        )
      end
      Exercise.create_exercise(blueprint[:id], workout_id, sets, user[:id])
    end

    it "previous exercise unsuccessful(User less than or equal to half the previous set at the less than the assigned weight and reps)" do
      exercise =
        Exercise
          .where(name: "Side Lateral Raise", user_id: user[:id])
          .order(:created_at)
          .last
      expect(exercise[:weight]).to eq(6)
      expect(exercise[:reps]).to eq(9)
    end

    it "previous exercise unsuccessful(User does more than half the previous set at less than the assigned weight and reps)" do
      exercise =
        Exercise
          .where(name: "Dumbbell side bend", user_id: user[:id])
          .order(:created_at)
          .last
      expect(exercise[:weight]).to eq(4)
      expect(exercise[:reps]).to eq(7)
    end
  end
end
