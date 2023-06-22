// import ToggleButton from '../Toggle/Toggle';
import './CardDeveloper.css';
import { useNavigate } from 'react-router-dom';
import ReadOnlyRating from '../ratings/ReadOnlyRating/ReadOnlyRating';
import WriteRatingForDeveloper from '../ratings/WriteRatingForDeveloper/WriteRatingForDeveloper';

const CardDeveloper = ({ developer }) => {
  const navigate = useNavigate();
  const pathById = `/developerDetails`;
  console.log(developer._id);

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
        <img src={developer.image} alt={`developer's ${developer.name.surname} pic`} />
        <div className="developer-Info-tabla-name">
          {developer.name} {developer.surname}
          <p className="developer-Info-Ubicado"> ✨ Ubicado/a en {developer.city}</p>
        </div>
        <h3 className="developer-Info-Rol">{developer.rol}</h3>
<<<<<<< HEAD
        <div className="developer-Info-ratingsByOthers">
          <ReadOnlyRating user={developer} />
          <WriteRating userRating={developer} />({developer.ratingsByOthers.length})
        </div>
        <div className="developer-Info-grupo-technologies">
          <h4 className="developer-Info-technologies">{developer.technologies}</h4>
        </div>
      </a>
=======
      </a>
      <div className="developer-Info-ratingsByOthers">
        <ReadOnlyRating user={developer} />
        <WriteRatingForDeveloper userToRate={developer} />
      </div>
      <div className="developer-Info-grupo-technologies">
        <h4 className="developer-Info-technologies">{developer.technologies}</h4>
      </div>


>>>>>>> 68fd69cc3aa5bce8646f65bb2c2f5a5247021a5b
    </section>
  );
};

export default CardDeveloper;
