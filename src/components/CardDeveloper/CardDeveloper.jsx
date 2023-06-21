// import ToggleButton from '../Toggle/Toggle';
import './CardDeveloper.css';
import { useNavigate } from 'react-router-dom';

export const CardDeveloper = ({ developer }) => {
  const navigate = useNavigate();
  // const pathById = `/dewveloper`;

  // console.log("mobileDev: ", mobileDev);
  return (
    <section className="developer-Info">
      <img src={developer.image} alt={`developer's ${developer.name.surname} pic`} />
      <div className="developer-Info-tabla-name">
        {developer.name} {developer.surname}
        <p className="developer-Info-Ubicado"> ✨ Ubicado/a en {developer.city}</p>
      </div>
      <h3 className="developer-Info-Rol">{developer.rol}</h3>
      <p className="developer-Info-ratingsByOthers">
        {' '}
        ⭐⭐⭐⭐⭐ {developer.ratingsByOthers} (9)
      </p>
      <div className="developer-Info-grupo-technologies">
        <h4 className="developer-Info-technologies">{developer.technologies}</h4>
      </div>
    </section>
  );
};

export default CardDeveloper;
