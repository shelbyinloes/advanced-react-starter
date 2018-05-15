function Teachers(props) {
    let { teachers } = props;
    let teacherDivs = props.teachers.map((t, i) => (
      <Teacher key={i} teacher={t} />
    ));
    return (
      <div>
        <h1>Teachers</h1>
        {teacherDivs}
      </div>
    );
  }