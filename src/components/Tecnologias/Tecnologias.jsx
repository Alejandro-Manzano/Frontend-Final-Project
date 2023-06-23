import React from 'react';
import './Tecnologias.css';
import { technologies } from '../../data/object.tecnologias';
import ToggleTech from '../Toggle tecnologies/Toggle';
import { getUserById, updateTecnologia } from '../../services/API_proyect/user.service';
import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/authContext';

const Tecnologias = () => {
  const [arrayTecn, setArrayTecn] = useState(() => []);
  const [send, setSend] = useState(false);
  const [res, setRes] = useState(null);
  const [resInit, setResInit] = useState(null);
  const { user } = useAuth();

  const handleServiceAdd = async () => {
    setSend(true);
    let arrayString = JSON.stringify(arrayTecn);
    setRes(await updateTecnologia({ technologies: arrayTecn }));
    setSend(false);
  };

  const userById = async () => {
    setSend(true);
    setResInit(await getUserById(user._id));
    setSend(false);
  };

  useEffect(() => {
    if (resInit == null) userById();
  }, []);

  useEffect(() => {
    console.log(resInit);
    if (resInit?.status == 200) setArrayTecn(resInit.data.technologies);
  }, [resInit]);

  useEffect(() => {
    console.log(arrayTecn);
  }, [arrayTecn]);

  useEffect(() => {
    if (res?.status == '200') setArrayTecn(res.data.newUser.technologies);
  }, [res]);

  return (
    <>
      <button onClick={() => handleServiceAdd()} disabled={send}>
        {' '}
        enviar tech
      </button>
      <div className="father-container-technologies">
        {technologies.map((technology, index) => (
          <figure key={index} className="tecnologia-item" id={technology.name}>
            <div className="image-container">
              <img className="tech-image" src={technology.image} alt={technology.name} />
            </div>

            <p>{technology.name}</p>
            <ToggleTech setArrayTecn={setArrayTecn} arrayTecn={arrayTecn} />
          </figure>
        ))}
      </div>
    </>
  );
};

export default Tecnologias;
