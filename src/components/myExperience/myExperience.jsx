import React, { useEffect, useState } from 'react';
import { getByUserExperience } from '../../services/API_proyect/experience.service';
import { useAuth } from '../../contexts/authContext';
import DeleteExperienceButton from '../DeleteExperience/DeleteExperience';

const MyExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const userExperiences = await getByUserExperience(user._id);
        console.log(userExperiences);
        setExperiences(userExperiences);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <div>
      <h1>Mi experiencia laboral</h1>
      <ul>
        {experiences.map((experience, index) => (
          <li key={experience.title + '-' + index}>
            <h2>{experience.title}</h2>
            <div className="card-myExperience">
              <div>
                <img src={experience.image} alt={experience.title} />
              </div>
              <div className="experience-p-container">
                <p className="Experiencia_Negrita"> Duración: {experience.duration} año/s</p>
                <p>Descripción: {experience.description}</p>
                <p>Trabajado con: {experience.workedWith} año/s </p>
                <DeleteExperienceButton
                  id={experience._id}
                  experiences={experiences}
                  setExperiences={setExperiences}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyExperience;
