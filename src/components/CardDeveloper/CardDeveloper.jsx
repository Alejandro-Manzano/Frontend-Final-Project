import './CardDeveloper.css';
import { useNavigate } from 'react-router-dom';
import ReadOnlyRating from '../ratings/ReadOnlyRating/ReadOnlyRating';
import ToggleBtnFollowUser from '../ToggleBtnFollowUser/ToggleBtnFollowUser';

const CardDeveloper = ({ developer }) => {
  const navigate = useNavigate();
  const pathById = `/developerDetails`;

  return (
    <section className="developer-Info">
      <a
        className="button-MobileDev"
        onClick={() =>
          navigate(pathById, {
            state: { id: developer._id },
          })
        }
      >
        <img
          className="developer-Info-img"
          src={developer.image}
          alt={`developer's ${developer.name.surname} pic`}
        />
        <div className="developer-Info-tabla-name">
          {developer.name} {developer.surname}
          <p className="developer-Info-Ubicado"> ✨ Ubicado/a en {developer.city}</p>
        </div>
        <h3 className="developer-Info-Rol">{developer.rol}</h3>
      </a>
      <ToggleBtnFollowUser userToFollowId={developer._id} />
      <div className="developer-Info-ratingsByOthers">
        {/*--- Este componente hace la media de las estrellas ---*/}
        <ReadOnlyRating user={developer} />
        {developer?.ratingsByOthers?.length} valoraciones
      </div>
      <div className="developer-Info-grupo-technologies">
        <h4 className="developer-Info-technologies">{developer.technologies}</h4>
      </div>
    </section>
  );
};

export default CardDeveloper;
