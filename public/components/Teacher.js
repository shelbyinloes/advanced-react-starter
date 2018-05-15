function Teacher(props) {
    return (
      <div onClick={handleClick}>
        <h3>{props.teacher.name}</h3>
        <div>{props.teacher.subject}</div>
      </div>
    );
  }
  
  function handleClick() {
    console.log('Teacher clicked');
  }