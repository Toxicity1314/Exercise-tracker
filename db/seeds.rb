# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user1 = User.create(username: "Sean", password: "1234")
user2 = User.create(username: "Lily", password: "0987")

b1 = Blueprint.create(name: "Shoulder Abs")
b2 = Blueprint.create(name: "legs Abs")
b3 = Blueprint.create(name: "chest Tricep Abs")
b4 = Blueprint.create(name: "Back Bicep Abs")

e1 =
  Exercise.create(
    blueprint_id: b1[:id],
    name: "Seated dumbbell shoulder press",
    instructions:
      "While holding a dumbbell in each hand, sit on a military press bench or utility bench that has back support. Place the dumbbells upright on top of your thighs. Now raise the dumbbells to shoulder height one at a time using your thighs to help propel them up into position. Make sure to rotate your wrists so that the palms of your hands are facing forward. This is your starting position. Now, exhale and push the dumbbells upward until they touch at the top. Then, after a brief pause at the top contracted position, slowly lower the weights back down to the starting position while inhaling. Repeat for the recommended amount of repetitions. Variations: You can perform the exercise standing or sitting on a regular flat bench. For people with lower back problems, the version described is the recommended one. You can also perform the exercise as Arnold Schwarzenegger used to do it, which is to start holding the dumbbells with a supinated grip (palms facing you) in front of your shoulders and then, as you start pushing up, you align the dumbbells in the starting position described on step 3 by rotating your wrists and touch the dumbbells at the top. As you come down, then you would go back to the starting position by rotating the wrist throughout the lowering portion until the palms of your hands are facing you. This variation is called the Arnold Press. However, it is not recommended if you have rotator cuff problems."
  )

e2 =
  Exercise.create(
    blueprint_id: b1[:id],
    name: "Side Lateral Raise",
    instructions:
      "Pick a couple of dumbbells and stand with a straight torso and the dumbbells by your side at arms length with the palms of the hand facing you. This will be your starting position. While maintaining the torso in a stationary position (no swinging), lift the dumbbells to your side with a slight bend on the elbow and the hands slightly tilted forward as if pouring water in a glass. Continue to go up until you arms are parallel to the floor. Exhale as you execute this movement and pause for a second at the top. Lower the dumbbells back down slowly to the starting position as you inhale. Repeat for the recommended amount of repetitions. Variation: This exercise can also be performed sitting down.",
    weight: 5,
    reps: 8
  )

e3 =
  Exercise.create(
    blueprint_id: b1[:id],
    name: "Dumbbell side bend",
    instructions:
      "Stand up straight while holding a dumbbell on the left hand (palms facing the torso) as you have the right hand holding your waist. Your feet should be placed at shoulder width. This will be your starting position. While keeping your back straight and your head up, bend only at the waist to the right as far as possible. Breathe in as you bend to the side. Then hold for a second and come back up to the starting position as you exhale. Tip: Keep the rest of the body stationary. Now repeat the movement but bending to the left instead. Hold for a second and come back to the starting position. Repeat for the recommended amount of repetitions and then change hands. Caution: Refrain from using this exercise if your obliques tend to grow easily as wide obliques take away from your symmetry. Variations: You can also do this exercise while seating on a bench or with a barbell.",
    weight: 5,
    reps: 8
  )

e4 =
  Exercise.create(
    blueprint_id: b1[:id],
    name: "Arnold press",
    instructions:
      "Sit on an exercise bench with back support and hold two dumbbells in front of you at about upper chest level with your palms facing your body and your elbows bent. Tip: Your arms should be next to your torso. The starting position should look like the contracted portion of a dumbbell curl. Now to perform the movement, raise the dumbbells as you rotate the palms of your hands until they are facing forward. Continue lifting the dumbbells until your arms are extended above you in straight arm position. Breathe out as you perform this portion of the movement. After a second pause at the top, begin to lower the dumbbells to the original position by rotating the palms of your hands towards you. Tip: The left arm will be rotated in a counter clockwise manner while the right one will be rotated clockwise. Breathe in as you perform this portion of the movement. Repeat for the recommended amount of repetitions. Variations: You can perform the exercise standing up but that is not recommended for people with lower back issues.",
    weight: 5,
    reps: 8
  )

e5 =
  Exercise.create(
    blueprint_id: b1[:id],
    name: "Cocoons",
    instructions:
      "Begin by lying on your back on the ground. Your legs should be straight and your arms extended behind your head. This will be your starting position. To perform the movement, tuck the knees toward your chest, rotating your pelvis to lift your glutes from the floor. As you do so, flex the spine, bringing your arms back over your head to perform a simultaneous crunch motion. After a brief pause, return to the starting position.",
    weight: 5,
    reps: 8
  )

e6 =
  Exercise.create(
    blueprint_id: b2[:id],
    name: "Dumbbell squat",
    instructions:
      "Stand up straight while holding a dumbbell on each hand (palms facing the side of your legs). Position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances discussed in the foot stances section. Begin to slowly lower your torso by bending the knees as you maintain a straight posture with the head up. Continue down until your thighs are parallel to the floor. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly. Begin to raise your torso as you exhale by pushing the floor with the heel of your foot mainly as you straighten the legs again and go back to the starting position. Repeat for the recommended amount of repetitions. Caution: Be cautious with the weight used; in case of doubt, use less weight rather than more. The squat is a very safe exercise but only if performed properly. You may use wrist wraps for this exercise. Variations: As previously mentioned, there are various stances that can be used depending on what you want to emphasize. You can also use a barbell for this exercise.",
    weight: 5,
    reps: 8
  )

e7 =
  Exercise.create(
    blueprint_id: b2[:id],
    name: "Hanging knee raise with manual resistance",
    instructions:
      "Hang from a pull-up bar with your arms extended and your feet together (use ab straps if your grip is weak). Lock a slight bend in your knees. This will be your starting position. Without swinging your body, contract your lower abs to raise your knees just past a position in which your thighs are parallel to the floor. As your pelvis begins to curl upward, your partner should place his hand just above your knees to push your legs back down to the starting position, keeping his hand in contact with your legs at all times. Engage your abs and try to resist the movement. With their free hand your partner can push against your lower back to ensure your body doesnâ€™t swing.",
    weight: 5,
    reps: 8
  )

e8 =
  Exercise.create(
    blueprint_id: b2[:id],
    name: "Dumbbell reverse lunge",
    instructions:
      "Stand with your torso upright holding two dumbbells in your hands by your sides. This will be your starting position. Step backward with your right leg around two feet or so from the left foot and lower your upper body down, while keeping the torso upright and maintaining balance. Inhale as you go down. Tip: As in the other exercises, do not allow your knee to go forward beyond your toes as you come down, as this will put undue stress on the knee joint. Make sure that you keep your front shin perpendicular to the ground. Keep the torso upright during the lunge; flexible hip flexors are important. A long lunge emphasizes the Gluteus Maximus; a short lunge emphasizes Quadriceps. Push up and go back to the starting position as you exhale. Tip: Use the ball of your feet to push in order to accentuate the quadriceps. To focus on the glutes, press with your heels. Now repeat with the opposite leg. Variations: There are several ways to perform the exercise. You can do what I call a static lunge where your starting position is with one of your feet already forward. In this case, you just go up and down from that starting position until you are done with the recommended amount of repetitions. Then you switch legs and do the same. A more challenging version is the walking lunges where you walk across the room but in a lunging fashion. For walking lunges the leg being left back has to be brought forward after the lunging action has happened in order to continue moving ahead. This version is reserved for the most advanced athletes. Lunges can be performed with dumbbells as described above or with a barbell on the back, though the barbell variety is better suited for the advanced athletes who have mastered the exercise and no longer have balance issues.",
    weight: 5,
    reps: 8
  )

e9 =
  Exercise.create(
    blueprint_id: b2[:id],
    name: "chair calf raise",
    instructions:
      "Stand upright on a block while holding onto the back of a chair. Exhale and stand up on your toes, focusing on maintaining balance while keeping your legs straight. Continue raising yourself until you can't stand any higher on your toes. Inhale and lower yourself back down, returning to the starting position.",
    weight: 5,
    reps: 8
  )

e10 =
  Exercise.create(
    blueprint_id: b2[:id],
    name: "Lying oblique crunch",
    instructions:
      "Start out by lying on your right side with your legs lying on top of each other. Make sure your knees are bent a little bit. Place your left hand behind your head. Once you are in this set position, begin by moving your left elbow up as you would perform a normal crunch except this time the main emphasis is on your obliques. Crunch as high as you can, hold the contraction for a second and then slowly drop back down into the starting position. Remember to breathe in during the eccentric (lowering) part of the exercise and to breathe out during the concentric (elevation) part of the exercise. Note: While you cannot add resistance to this exercise you can concentrate on perfect execution and slow speed.",
    weight: 5,
    reps: 8
  )

e11 =
  Exercise.create(
    blueprint_id: b3[:id],
    name: "incline dumbell bench press",
    instructions:
      "Lie flat on the bench so that your head, upper back, lower back, and both feet are firmly pressed against the bench and ground at all points while holding two dumbbells at shoulder level with an overhand grip. Exhale and press through both hands to raise the dumbbells up and towards each other. Continue until your arms are fully extended. Inhale and lower your arms, returning to the starting position.",
    weight: 5,
    reps: 8
  )
e12 =
  Exercise.create(
    blueprint_id: b3[:id],
    name: "Decline Push up",
    instructions:
      "Position your hands on the ground at shoulder level, slightly wider than shoulder-width apart, and press your feet up against a wall with straight legs to hold yourself in place. While maintaining a straight torso, exhale and allow your arms to extend, raising yourself up. Continue until your arms are fully extended. Inhale and lower yourself to the ground until just before your chest makes contact with the ground, continuing to maintain a rigid torso and returning to the starting position.",
    weight: 5,
    reps: 8
  )
e13 =
  Exercise.create(
    blueprint_id: b3[:id],
    name: "One Arm Lying Dumbbell Tricep Extension",
    instructions:
      "Lie flat on the bench so that your head, upper back, lower back, and both feet are firmly pressed against the bench and ground at all points. Holding a dumbbell with an overhand grip over your shoulder, support the arm that is lifting the dumbbell with your opposite hand. Inhale and lower the dumbbell toward your opposite shoulder by bending your arm. Continue until the dumbbell is just above your opposite shoulder while holding your upper arm in place with your opposite hand. Exhale and raise the dumbbell by straightening your arm, returning to the starting position. After all reps are completed, switch sides and repeat the movement. 10 reps prescribed means you should perform 10 reps on each side (20 total).",
    weight: 5,
    reps: 8
  )
e14 =
  Exercise.create(
    blueprint_id: b3[:id],
    name: "Lying Dumbbell tricep Extension",
    instructions:
      "Lie flat on the bench so that your head, upper back, lower back, and both feet are firmly pressed against the bench and ground at all points. Raise two dumbbells to the level of your head with your palms facing toward each other, arms bent, and elbows tucked into your sides. Exhale, extending your arms to raise the dumbbells overhead while keeping your elbows pointed forward. Continue to extend your arms until they are straight. Inhale, lowering the dumbbells to the starting position.",
    weight: 5,
    reps: 8
  )
e15 =
  Exercise.create(
    blueprint_id: b3[:id],
    name: "Sit Up",
    instructions:
      "Lie down in a supine position with your knees bent and hands behind your head. Exhale and raise your chest toward your knees. Continue raising yourself up until you can no longer do so while still keeping your feet and butt firmly planted on the ground. Inhale and lower your torso back down, returning to the starting position.",
    weight: 5,
    reps: 8
  )

e16 =
  Exercise.create(
    blueprint_id: b4[:id],
    name: "One-Arm Dumbbell Row",
    instructions:
      "Choose a flat bench and place a dumbbell on each side of it. Place the right leg on top of the end of the bench, bend your torso forward from the waist until your upper body is parallel to the floor, and place your right hand on the other end of the bench for support. Use the left hand to pick up the dumbbell on the floor and hold the weight while keeping your lower back straight. The palm of the hand should be facing your torso. This will be your starting position. Pull the resistance straight up to the side of your chest, keeping your upper arm close to your side and keeping the torso stationary. Breathe out as you perform this step. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. Also, make sure that the force is performed with the back muscles and not the arms. Finally, the upper torso should remain stationary and only the arms should move. The forearms should do no other work except for holding the dumbbell; therefore do not try to pull the dumbbell up using the forearms. Lower the resistance straight down to the starting position. Breathe in as you perform this step. Repeat the movement for the specified amount of repetitions. Switch sides and repeat again with the other arm. Variations: One-arm rows can also be performed using a high pulley or a low pulley instead of a dumbbell.",
    weight: 5,
    reps: 8
  )

e17 =
  Exercise.create(
    blueprint_id: b4[:id],
    name: "Alternate Incline Dumbbell Curl",
    instructions:
      "Sit down on an incline bench with a dumbbell in each hand being held at arms length. Tip: Keep the elbows close to the torso.This will be your starting position. While holding the upper arm stationary, curl the right weight forward while contracting the biceps as you breathe out. As you do so, rotate the hand so that the palm is facing up. Continue the movement until your biceps is fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the biceps. Tip: Only the forearms should move. Slowly begin to bring the dumbbell back to starting position as your breathe in. Repeat the movement with the left hand. This equals one repetition. Continue alternating in this manner for the recommended amount of repetitions. Just like the Incline Dumbbell Curl but only one arm at a time.",
    weight: 5,
    reps: 8
  )

e18 =
  Exercise.create(
    blueprint_id: b4[:id],
    name: "Standing dumbbell shrug",
    instructions:
      "Stand erect with a dumbbell on each hand (palms facing your torso), arms extended on the sides. Lift the dumbbells by elevating the shoulders as high as possible while you exhale. Hold the contraction at the top for a second. Tip: The arms should remain extended at all times. Refrain from using the biceps to help lift the dumbbells. Only the shoulders should be moving up and down. Lower the dumbbells back to the original position. Repeat for the recommended amount of repetitions. Variations: You can perform this exercise with bands, barbells or cables. You can also use a single handle and work one side at a time.",
    weight: 5,
    reps: 8
  )

e19 =
  Exercise.create(
    blueprint_id: b4[:id],
    name: "Hammer Curls",
    instructions:
      "Stand up with your torso upright and a dumbbell on each hand being held at arms length. The elbows should be close to the torso. The palms of the hands should be facing your torso. This will be your starting position. Now, while holding your upper arm stationary, exhale and curl the weight forward while contracting the biceps. Continue to raise the weight until the biceps are fully contracted and the dumbbell is at shoulder level. Hold the contracted position for a brief moment as you squeeze the biceps. Tip: Focus on keeping the elbow stationary and only moving your forearm. After the brief pause, inhale and slowly begin the lower the dumbbells back down to the starting position. Repeat for the recommended amount of repetitions. Variations: There are many possible variations for this movement. For instance, you can perform the exercise sitting down on a bench with or without back support and you can also perform it by alternating arms; first lift the right arm for one repetition, then the left, then the right, etc.",
    weight: 5,
    reps: 8
  )
