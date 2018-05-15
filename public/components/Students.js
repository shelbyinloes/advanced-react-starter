function Students(props) {
  let date = "5/15/2018";
  let { students } = props;
  let studentDivs = props.students.map((s, i) => (
    <Student key={i} student={s} date={date} />
  ));
  return (
    <div>
      <h1>Students</h1>
      {studentDivs}
    </div>
  );
}
  