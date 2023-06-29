import './Home.css';
import { NavLink } from 'react-router-dom';
import ButtonStyle from '../components/ButtonStyle/ButtonStyle';
//import { ThemeProvider, useTheme } from "@emotion/react";
//import GlobalStyles from '../../styles/globalStyles';

export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-description">
        <div className="home-presentation">
          {/* <ThemeProvider
                //theme={createTheme(theme === "dark" ? themeDark : themeLight)}
                theme={createTheme(theme === "dark" ? themeLight : themeDark)}
            >
            </ThemeProvider> */}

          <p className="home-title">
            Encuentra y contrata desarrolladores profesionales
            <br className="home-br"></br> con ganas de afrontar nuevos retos
          </p>

          <div className="home-button-container">
            <p className="home-p">
              Trabaja con los mejores profesionales <br></br>a través de nuestra
              plataforma
            </p>

            <div className="home-subButton">
              <NavLink to="/aboutUs">
                <button className="home-contactUs">About Us</button>
              </NavLink>
              <NavLink to="/offers">
                <button className="home-learnMore">
                  <p style={{ margin: 0 }}>Learn more</p>
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        <div>
          <img
            className="home-img"
            src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687264539/ProjectFinalBOOTCAMP/Home/PhotoHome_vmq68c.png"
            alt="person-coding"
          ></img>
        </div>
      </div>

      <div className="home-company-container">
        <p className="home-p-company">Algunos de nuestros clientes de confianza</p>

        <ul className="home-company-list">
          <li>
            <img
              src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687042575/ProjectFinalBOOTCAMP/Logos%20empresas/samsunglogo_c641x7.png"
              alt="company-icon"
            ></img>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687042562/ProjectFinalBOOTCAMP/Logos%20empresas/deloitte_cn08vh.png"
              alt="company-icon"
            ></img>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687042558/ProjectFinalBOOTCAMP/Logos%20empresas/googlelogo_tmjgkk.png"
              alt="company-icon"
            ></img>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687042547/ProjectFinalBOOTCAMP/Logos%20empresas/ibm_p8r7ix.png"
              alt="company-icon"
            ></img>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687042373/ProjectFinalBOOTCAMP/accenturelogo_u3743w.png"
              alt="company-icon"
            ></img>
          </li>
        </ul>
      </div>

      <div className="home-works-container">
        <p className="home-works-title">Que relizamos ?</p>
        <p className="home-works-p">
          Hacemos llegar a personas y empresas el talento de desarrolladres independientes{' '}
          <br></br>mostrando todas sus habilidades y experiencia
        </p>

        <section className="home-works-section">
          <figure className="home-figure">
            <img
              src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687201713/ProjectFinalBOOTCAMP/Iconos/codificacion_haizvr_e3xurb.png"
              alt="icon"
              className="home-figure-img"
            ></img>
            <p className="home-figure-p">Muestra tu código</p>
          </figure>

          <figure className="home-figure">
            <img
              src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687202629/ProjectFinalBOOTCAMP/Iconos/cv_d9xlwt_vgbzrd.png"
              alt="icon"
              className="home-figure-img"
            ></img>
            <p className="home-figure-p">Potencia tu CV</p>
          </figure>

          <figure className="home-figure">
            <img
              src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687206027/ProjectFinalBOOTCAMP/Iconos/work-from-home_kg4n0a_sxziw9.png"
              alt="icon"
              className="home-figure-img"
            ></img>
            <p className="home-figure-p">Trabaja desde casa</p>
          </figure>

          <figure className="home-figure">
            <img
              src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687202347/ProjectFinalBOOTCAMP/Iconos/ofertas_zo3exv_xnw4fp.png"
              alt="icon"
              className="home-figure-img"
            ></img>
            <p className="home-figure-p">Estabilidad laboral</p>
          </figure>

          <figure className="home-figure">
            <img
              src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687379221/ProjectFinalBOOTCAMP/Iconos/entrevista_ux3w0d_auwekn.png"
              alt="icon"
              className="home-figure-img"
            ></img>
            <p className="home-figure-p">Entrevistas online</p>
          </figure>

          <figure className="home-figure">
            <img
              src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687379203/ProjectFinalBOOTCAMP/Iconos/money-management_obo14d_j2kdm8.png"
              alt="icon"
              className="home-figure-img"
            ></img>
            <p className="home-figure-p">Salarios competitiivos</p>
          </figure>
        </section>
      </div>
      <div className="home-review-container">
        <p className="home-review-title">
          Algunos de nuestros clientes <br></br>satisfechos
        </p>

        <section className="home-review-section">
          <figure className="home-review-figure">
            <p className="home-review-figure-p">
              Que pagina mas buenas me lo pase pirata ademas aprendi a comerme Monitores
              4k. No tengo watsap solo Mail
            </p>
            <div className="home-review-developer">
              <img
                className="home-person-review"
                src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687259001/UserFTProyect/vs86srsiqyurqmqeeppt.jpg"
                alt="person-review"
              ></img>

              <div className="home-nameJob-person">
                <p className="home-person">Aitor Gutierrez</p>
                <p className="home-job">Full Stack Developer</p>
              </div>
            </div>
          </figure>

          <figure className="home-review-figure">
            <p className="home-review-figure-p">
              Soy de Coruña y me dedico a hacer doumentacion sabrosona si quieres la tuya
              contactame por Telegram
            </p>
            <div className="home-review-developer">
              <img
                className="home-person-review"
                src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687344671/Captura_de_pantalla_2023-06-21_a_las_12.50.24_vx83nc.png"
                alt="person-review"
              ></img>

              <div className="home-nameJob-person">
                <p className="home-person">Jonatan Rodriguez</p>
                <p className="home-job">Frontend Developer</p>
              </div>
            </div>
          </figure>

          <figure className="home-review-figure">
            <p className="home-review-figure-p">
              Hola sóc un alcohòlic de Castefa, m'agrada la ruleta i la meva cosina, també
              es desenvolupar aplicacions per a fumadors a pascal
            </p>
            <div className="home-review-developer">
              <img
                className="home-person-review"
                src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687345050/ozi_dxjzjs.jpg"
                alt="person-review"
              ></img>

              <div className="home-nameJob-person">
                <p className="home-person">Marc Mateo</p>
                <p className="home-job">Full Stack Developer</p>
              </div>
            </div>
          </figure>
        </section>
      </div>
    </div>
  );
};
