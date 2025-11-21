import React from 'react';

function Home() {
  return (
    <div className="text-center">
      <div className="mb-4">
        <img 
          src="/images/profile.jpg" 
          alt="Noor Mohrez: Computer Science student, photographer, and videographer" 
          className="rounded-circle img-fluid"
          style={{ maxWidth: '300px', height: 'auto' }}
        />
      </div>
      <h1>Welcome!</h1>
      <p className="lead">My name is Noor, I'm a Comp Sci student, photographer, and videographer!</p>
      <p>Please check out my website!</p>
    </div>
  );
}

export default Home;
