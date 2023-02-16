import React, {useEffect, useState} from "react";

function RepsPage({user}) {
const [repList, setRepList] = useState(null)

useEffect(()=>{
  fetch(`/users/${user.id}`)
  .then(res => res.json())
  .then(reps => setRepList(reps.workouts))
},[])
console.log(repList)

  const reps = repList ? repList.map(workout => workout.reps.map(rep => <li key ={rep.id}>{`${rep.exercise.name} rep ${rep.quantity} weight ${rep.weight} successful ${rep.successful}`}</li>)) : null


  return (
    <header className="nav">
      <ul>
        {reps}
      </ul>
        {/* {repList} */}
    </header>
  );
}

export default RepsPage;
