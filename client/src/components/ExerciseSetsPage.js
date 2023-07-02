import React, { useEffect, useState } from "react";

function ExerciseSetsPage({ user }) {
  const [setList, setSetList] = useState(null);

  useEffect(() => {
    fetch(`/users/${user.id}`)
      .then((res) => res.json())
      .then((sets) => setSetList(sets.workouts));
  }, []);
  console.log(setList);

  const sets = setList
    ? setList.map((workout) =>
        workout.sets.map((set) => (
          <li
            key={set.id}
          >{`${set.exercise.name} set ${set.reps} weight ${set.weight} successful ${set.successful}`}</li>
        ))
      )
    : null;

  return (
    <header className="nav">
      <ul>{sets}</ul>
      {/* {setList} */}
    </header>
  );
}

export default ExerciseSetsPage;
