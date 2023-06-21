import React, { useState } from 'react';
import CreateExperienceUser from '../createExperience/createExperience';
import MyExperience from '../myExperience/myExperience';

const Experience = () => {
  const [show, setShow] = useState('create');

  const handleButtonClick = (component) => () => {
    setShow(component);
  };

  return (
    <div>
      <button onClick={handleButtonClick('create')}>Crear Experiencia</button>
      <button onClick={handleButtonClick('my')}>Mi Experiencia</button>
      {show === 'create' && <CreateExperienceUser />}
      {show === 'my' && <MyExperience />}
    </div>
  );
};

export default Experience;
