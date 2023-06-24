import './CardDeveloper.css';
import { useNavigate } from 'react-router-dom';
import ReadOnlyUserRating from '../ratings/ReadOnlyUserRating/ReadOnlyUserRating';
import ToggleBtnFollowUser from '../ToggleBtnFollowUser/ToggleBtnFollowUser';

const CardDeveloper = ({ developer }) => {
  const navigate = useNavigate();
  const pathById = `/developerDetails`;

  return (
    <section className="developer-Info">
      
        <div className="developer-Info-Toggle-Heart">
          <ToggleBtnFollowUser userToFollowId={developer._id} />
        </div>
        <a
        className="button-Developer"
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

      <div className="developer-Info-ratingsByOthers">
        {/*--- Este componente hace la media de las estrellas ---*/}
        <ReadOnlyUserRating user={developer} />
        {developer?.ratingsByOthers?.length} valoraciones
      </div>
      <div className="developer-Info-grupo-technologies">
        <h4 className="developer-Info-technologies">{developer.technologies}</h4>
      </div>
    </section>
  );
};

export default CardDeveloper;
