require "rails_helper"

RSpec.describe Exercise, type: :model do
  describe "create_exercise" do
    let(:user) { User.create(username: "Sean", password: "1234") }
    let(:workout_id) { 1 }
    let(:sets) { 1 }
    let(:blueprint) { Blueprint.create(name: "Shoulder Abs") }

    before do
      no_previous_exercise_sets =
        Exercise.create(
          blueprint_id: blueprint[:id],
          name: "Seated dumbbell shoulder press",
          instructions:
            "While holding a dumbbell in each hand, sit on a military press bench or utility bench that has back support. Place the dumbbells upright on top of your thighs. Now raise the dumbbells to shoulder height one at a time using your thighs to help propel them up into position. Make sure to rotate your wrists so that the palms of your hands are facing forward. This is your starting position. Now, exhale and push the dumbbells upward until they touch at the top. Then, after a brief pause at the top contracted position, slowly lower the weights back down to the starting position while inhaling. Repeat for the recommended amount of repetitions. Variations: You can perform the exercise standing or sitting on a regular flat bench. For people with lower back problems, the version described is the recommended one. You can also perform the exercise as Arnold Schwarzenegger used to do it, which is to start holding the dumbbells with a supinated grip (palms facing you) in front of your shoulders and then, as you start pushing up, you align the dumbbells in the starting position described on step 3 by rotating your wrists and touch the dumbbells at the top. As you come down, then you would go back to the starting position by rotating the wrist throughout the lowering portion until the palms of your hands are facing you. This variation is called the Arnold Press. However, it is not recommended if you have rotator cuff problems.",
          weight: 5,
          reps: 8
        )

      previous_exercise_successful_reps_less_than_10 =
        Exercise.create(
          blueprint_id: blueprint[:id],
          name: "Side Lateral Raise",
          instructions:
            "Pick a couple of dumbbells and stand with a straight torso and the dumbbells by your side at arms length with the palms of the hand facing you. This will be your starting position. While maintaining the torso in a stationary position (no swinging), lift the dumbbells to your side with a slight bend on the elbow and the hands slightly tilted forward as if pouring water in a glass. Continue to go up until you arms are parallel to the floor. Exhale as you execute this movement and pause for a second at the top. Lower the dumbbells back down slowly to the starting position as you inhale. Repeat for the recommended amount of repetitions. Variation: This exercise can also be performed sitting down.",
          weight: 5,
          reps: 9,
          user_id: user[:id]
        )
      3.times do
        ExerciseSet.create(
          weight: 5,
          reps: 9,
          exercise_id: previous_exercise_successful_reps_less_than_10.id,
          completed_at: DateTime.now,
          user_id: user[:id]
        )
      end

      previous_exercise_successful_reps_greater_than_10 =
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
          weight: 5,
          reps: 10,
          exercise_id: previous_exercise_successful_reps_greater_than_10.id,
          completed_at: DateTime.now,
          user_id: user[:id]
        )
      end

      previous_exercise_successful_user_updated_sets_and_reps =
        Exercise.create(
          blueprint_id: blueprint[:id],
          name: "Arnold press",
          instructions:
            "Sit on an exercise bench with back support and hold two dumbbells in front of you at about upper chest level with your palms facing your body and your elbows bent. Tip: Your arms should be next to your torso. The starting position should look like the contracted portion of a dumbbell curl. Now to perform the movement, raise the dumbbells as you rotate the palms of your hands until they are facing forward. Continue lifting the dumbbells until your arms are extended above you in straight arm position. Breathe out as you perform this portion of the movement. After a second pause at the top, begin to lower the dumbbells to the original position by rotating the palms of your hands towards you. Tip: The left arm will be rotated in a counter clockwise manner while the right one will be rotated clockwise. Breathe in as you perform this portion of the movement. Repeat for the recommended amount of repetitions. Variations: You can perform the exercise standing up but that is not recommended for people with lower back issues.",
          weight: 5,
          reps: 7,
          user_id: user[:id]
        )
      4.times do
        ExerciseSet.create(
          weight: 10,
          reps: 10,
          exercise_id:
            previous_exercise_successful_user_updated_sets_and_reps.id,
          completed_at: DateTime.now,
          user_id: user[:id]
        )
      end

      change_weight_to_3 =
        Exercise.create(
          blueprint_id: blueprint[:id],
          name: "Cocoons",
          instructions:
            "Begin by lying on your back on the ground. Your legs should be straight and your arms extended behind your head. This will be your starting position. To perform the movement, tuck the knees toward your chest, rotating your pelvis to lift your glutes from the floor. As you do so, flex the spine, bringing your arms back over your head to perform a simultaneous crunch motion. After a brief pause, return to the starting position.",
          weight: 3,
          reps: 8,
          user_id: user[:id]
        )
      5.times do
        ExerciseSet.create(
          weight: 20,
          reps: 8,
          exercise_id: change_weight_to_3.id,
          completed_at: DateTime.now,
          user_id: user[:id]
        )
      end
      Exercise.create_exercise(blueprint[:id], workout_id, sets, user[:id])
    end

    it "Expects there to be no previous exercise sets which automatically set new exercise to weight 5 reps 8" do
      exercise =
        Exercise
          .where(name: "Seated dumbbell shoulder press", user_id: user[:id])
          .order(:created_at)
          .last
      expect(exercise[:weight]).to eq(5)
      expect(exercise[:reps]).to eq(8)
    end

    it "Expects all previous exercise sets to be completed at the same weight and reps as the previous exercise. Previous exercise reps <10 automatically sets new exercise to previous exercise weight and previous exercise reps + 1" do
      exercise =
        Exercise
          .where(name: "Side Lateral Raise", user_id: user[:id])
          .order(:created_at)
          .last
      expect(exercise[:weight]).to eq(5)
      expect(exercise[:reps]).to eq(10)
    end

    it "Expects previous exercise sets to be completed at the same weight and reps as the previous exercise. Previous exercise >=10 automatically sets new exercise to previous exercise weight+2.5 and reps 8" do
      exercise =
        Exercise
          .where(name: "Dumbbell side bend", user_id: user[:id])
          .order(:created_at)
          .last
      expect(exercise[:weight]).to eq(10)
      expect(exercise[:reps]).to eq(8)
    end

    it "Expects all previous exercise sets to be completed at or above the previous exercise weight and reps. Will set weight to the average weight of the previous exercise sets to the closest 0.5. Will set reps to the average reps of the previous exercise sets" do
      exercise =
        Exercise
          .where(name: "Arnold press", user_id: user[:id])
          .order(:created_at)
          .last
      expect(exercise[:weight]).to eq(10)
      expect(exercise[:reps]).to eq(10)
    end
  end
end
