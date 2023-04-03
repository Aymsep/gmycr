import React from 'react';
import Profile from './profile/Profile';
import image from './image.png';

const App = () => {
  const handleName = (name) => {
    alert(`Profile user name is ${name}`);
  };

  return (
    <div>
      <Profile
        fullName="John Smith"
        bio="Software Engineer"
        profession="React Developer"
        handleName={handleName}
      >
        <img src={image} alt="Profile Image" />
      </Profile>
    </div>
  );
};

export default App;
