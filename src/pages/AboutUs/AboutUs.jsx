import React from 'react';
import './AboutUs.css';
import { AiFillGithub, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const AboutUs = () => {
  return (
    <section class="section-white">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2 class="section-title">The Team Code</h2>

            <p class="section-subtitle">
              {' '}
              Nuestra pasión por la programación y la comunidad nos impulsó a crear una
              plataforma donde los sueños digitales toman forma.
            </p>
          </div>

          <div class="col-sm-6 col-md-4">
            <div class="team-item">
              <img
                src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687110627/UserFTProyect/rqwetuzyrv36t1j48yfz.png"
                alt="person-review"
                class="team-img"
              />
              <h3>CARLOS MARTIN</h3>
              <div class="team-info">
                <p>Habitante de Telde</p>
              </div>
              <p>
                Me apasionó la programación por su inmenso potencial para crear e innovar.
                Es una herramienta con la que podemos transformar ideas abstractas en
                soluciones tangibles y hacer la vida más fácil y emocionante.
              </p>

              <ul class="team-icon">
                <li>
                  <a href="#" class="gitHub">
                    <AiFillGithub size={35} />
                  </a>
                </li>

                <li>
                  <a href="#" class="youTube">
                    <AiFillYoutube size={37} />
                  </a>
                </li>

                <li>
                  <a href="#" class="twitter">
                    <AiFillTwitterCircle size={37} />
                  </a>
                </li>

                <li>
                  <a href="#" class="facebook">
                    <BsFacebook size={35} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-sm-6 col-md-4">
            <div class="team-item">
              <img
                src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687259001/UserFTProyect/vs86srsiqyurqmqeeppt.jpg"
                alt="person-review"
                class="team-img"
              />

              <h3>AITOR GUTIÉRREZ</h3>

              <div class="team-info">
                <p>NO SE ME OCURRE</p>
              </div>

              <p>
                Me sumergí en la programación para desentrañar su potencial disruptivo en
                la esfera del marketing, con la ambición de trascender las fronteras
                convencionales y crear experiencias que hablen a los corazones de los
                usuarios.
              </p>

              <ul class="team-icon">
                <li>
                  <a href="#" class="gitHub">
                    <AiFillGithub size={35} />
                  </a>
                </li>

                <li>
                  <a href="#" class="youTube">
                    <AiFillYoutube size={37} />
                  </a>
                </li>

                <li>
                  <a href="#" class="twitter">
                    <AiFillTwitterCircle size={37} />
                  </a>
                </li>

                <li>
                  <a href="#" class="facebook">
                    <BsFacebook size={35} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="team-item">
              <img
                src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687345050/ozi_dxjzjs.jpg"
                alt="person-review"
                class="team-img"
              />

              <h3>Ozillo</h3>

              <div class="team-info">
                <p>Habitante del norte</p>
              </div>

              <p>
                Descubrí la programación como un universo ilimitado de posibilidades,
                donde cada línea de código es una pincelada en el lienzo de la innovación.
                Me he dedicado a este arte porque me permite soñar y construir,
                transformando los desafíos en oportunidades de cambio y progreso.
              </p>

              <ul class="team-icon">
                <li>
                  <a href="#" class="gitHub">
                    <AiFillGithub size={35} />
                  </a>
                </li>

                <li>
                  <a href="#" class="youTube">
                    <AiFillYoutube size={37} />
                  </a>
                </li>

                <li>
                  <a href="#" class="twitter">
                    <AiFillTwitterCircle size={37} />
                  </a>
                </li>

                <li>
                  <a href="#" class="facebook">
                    <BsFacebook size={35} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
