export type RawExerciseSet = {
  id: number;
  reps: number;
  weight: number;
  completed_at?: Date;
  status: string;
};

export type RawCurrentExercise = {
  id: number;
  name: string;
  blueprint_id: number;
  instructions: string;
  workout_id: number;
  exercise_sets: RawExerciseSet[];
  pic_url?: string;
};

export type RawCurrentWorkout = {
  id: number;
  name: string;
  exercises: RawCurrentExercise[];
  completed_at?: Date;
};

export enum ExerciseSetStatus {
  SUCCESSFUL = "SUCCESSFUL",
  UNSUCCESSFUL = "UNSUCCESSFUL",
  INCOMPLETE = "INCOMPLETE",
}

export type ExerciseSet = {
  id: number;
  reps: number;
  weight: number;
  completedAt?: Date;
  status: ExerciseSetStatus;
};

export type CurrentExercise = {
  id: number;
  name: string;
  blueprintId: number;
  instructions: string;
  workoutId: number;
  exerciseSets: ExerciseSet[];
  picUrl?: string;
};

export type CurrentWorkout = {
  id: number;
  name: string;
  exercises: CurrentExercise[];
  completedAt?: Date;
};
