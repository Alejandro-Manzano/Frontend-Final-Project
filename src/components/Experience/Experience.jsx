import React, { useState } from 'react';
import CreateExperienceUser from '../createExperience/createExperience';
import MyExperience from '../myExperience/myExperience';

const Experience = () => {
  const [show, setShow] = useState('create');

  const handleButtonClick = (component) => () => {
    setShow(component);
  };

  return (
<>
      <section btn_profile_general-create-my-experience>
      <button className="btn_profile_general-my-expe" onClick={handleButtonClick('create')}>Crear Experiencia</button>
      {show === 'create' && <CreateExperienceUser />}
      <button  className="btn_profile_general-my-expe" onClick={handleButtonClick('my')}>Mi Experiencia</button>
      {show === 'my' && <MyExperience />}
      </section>
</>
  );
};

export default Experience;
