function Student(props){
  return (
    <div>
     <h3>{props.student.name}</h3>
     <div>{props.student.type}</div>
     <div>{props.student.phone}</div>
     <div>{props.student.address}</div>
     <div>{props.student.picture}</div>
     <div>{props.date}</div>
   </div>
  )
}