var theStudents = [
    {
      name: 'Bob Stanley',
      type: 'Student',
      phone: '333333333',
      address: '100 main st Austin, TX 78744',
      picture: 'https://picsum.photos/200/300/?random',
    },
    {
      name: 'Jeb Landers',
      type: 'Student',
      phone: '3356789877',
      address: '103 center st Austin, TX 78741',
      picture: 'https://picsum.photos/200/300/?random',
    },
    {
      name: 'Charlie Foster',
      type: 'Student',
      phone: '6543789765',
      address: '107 side st Austin, TX 78746',
      picture: 'https://picsum.photos/200/300/?random',
    },
  ];
  
  const theTeachers = [
    {
      name: 'Mr. Smith',
      subject: 'English',
    },
    {
      name: 'Mrs. Jones',
      subject: 'Math',
    },
  ];
  
  ReactDOM.render(
    <App students={theStudents} teachers={theTeachers} />,
    document.getElementById('root')
  );
  
  
  