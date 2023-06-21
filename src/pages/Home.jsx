import './Home.css';

export const Home = () => {

  return (

    <div className="home-container">

      <div className="home-description">

        <div className="home-presentation">

          <p className="home-title">Encuentra y contrata desarrolladores profesionales<br className='home-br'></br> con ganas de afrontar nuevos retos</p>

          <div className="home-button-container">

            <p className="home-p">Trabaja con los mejores profesionales <br></br>a través de nuestra plataforma</p>
            
            <div className="home-subButton">
              <button className="home-contactUs">Contact Us</button>
              <button className="home-learnMore"><p>Learn more</p></button>
            </div>

          </div>

        </div>

      <div>

        <img className="home-img" src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687264539/ProjectFinalBOOTCAMP/Home/PhotoHome_vmq68c.png" alt="person-coding"></img>

      </div>

    </div>

    <div className="home-company-container">

      <p className='home-p-company'>Algunos de nuestros clientes de confianza</p>

      <ul className="home-company-list">

        <li><img src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687042575/ProjectFinalBOOTCAMP/Logos%20empresas/samsunglogo_c641x7.png" alt="company-icon"></img></li>
        <li><img src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687042562/ProjectFinalBOOTCAMP/Logos%20empresas/deloitte_cn08vh.png" alt="company-icon"></img></li>
        <li><img src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687042558/ProjectFinalBOOTCAMP/Logos%20empresas/googlelogo_tmjgkk.png" alt="company-icon"></img></li>
        <li><img src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687042547/ProjectFinalBOOTCAMP/Logos%20empresas/ibm_p8r7ix.png" alt="company-icon"></img></li>
        <li><img src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687042373/ProjectFinalBOOTCAMP/accenturelogo_u3743w.png" alt="company-icon"></img></li>
        
      </ul>

    </div>

    <div className="home-works-container">

        <p className='home-works-title'>Que relizamos ?</p>
        <p className='home-works-p'>Hacemos llegar a personas y empresas el talento de desarrolladres independientes <br></br>mostrando todas sus habilidades y experiencia</p>

        <section className='home-works-section'>

          <figure className='home-figure'>
            <img src='https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687201713/ProjectFinalBOOTCAMP/Iconos/codificacion_haizvr_e3xurb.png' alt='icon' className='home-figure-img'></img>
            <p className='home-figure-p'>Muestra tu código</p>
          </figure>

          <figure className='home-figure'>
            <img src='https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687202629/ProjectFinalBOOTCAMP/Iconos/cv_d9xlwt_vgbzrd.png' alt='icon' className='home-figure-img'></img>
            <p className='home-figure-p'>Potencia tu CV</p>
          </figure>

          <figure className='home-figure'>
            <img src='https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687206027/ProjectFinalBOOTCAMP/Iconos/work-from-home_kg4n0a_sxziw9.png' alt='icon' className='home-figure-img'></img>
            <p className='home-figure-p'>Trabaja desde casa</p>
          </figure>

          <figure className='home-figure'>
            <img src='https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687202347/ProjectFinalBOOTCAMP/Iconos/ofertas_zo3exv_xnw4fp.png' alt='icon' className='home-figure-img'></img>
            <p className='home-figure-p'>Estabilidad laboral</p>
          </figure>

        </section>

    </div>

    <div className='home-review-container'>

      <p className='home-review-title'>Algunos de nuestros clientes <br></br>satisfechos</p>

      <section className='home-review-section'>

        <figure className="home-review-figure">

          <p className='home-review-figure-p'>Llevo sin ducharme meses , pero es porque a mi tierra "Elda" no llueve desde 1869. Me gsutan los gusanos de seda</p>
          <div className='home-review-developer'>
            <img className='home-person-review' src='https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687292684/samu_zngccx.jpg' alt='person-review'></img>

            <div className='home-nameJob-person'>
              <p className='home-person'>Samuel Salazar de Jerusalen</p>
              <p className='home-job'>Desarrollador de hongos</p>
            </div>
          </div>

        </figure>

        <figure className="home-review-figure">

          <p className='home-review-figure-p'>Empece a estudiar HTML y ahora estoy estudiando un poquito de Pascal bien rico</p>
          <div className='home-review-developer'>
            <img className='home-person-review' src='https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687110627/UserFTProyect/rqwetuzyrv36t1j48yfz.png' alt='person-review'></img>

            <div className='home-nameJob-person'>
              <p className='home-person'>Cmrbolsa</p>
              <p className='home-job'>Habitante de Telde</p>
            </div>
          </div>

        </figure>

        <figure className="home-review-figure">

          <p className='home-review-figure-p'>Me he criado en Grijota, pero ahora vivo en en la periferia Grijotana, me gusta una chica que se llama MongoDB, un pequeño xascarrillo.</p>
          <div className='home-review-developer'>
            <img className='home-person-review' src='https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687292673/PHOTO-2023-05-12-12-49-07_ziyeq9.jpg' alt='person-review'></img>

            <div className='home-nameJob-person'>
              <p className='home-person'>Jaime Fati</p>
              <p className='home-job'>Solution architec en el lego</p>
            </div>
          </div>

        </figure>

        <figure className="home-review-figure">

          <p className='home-review-figure-p'>Que pagina mas buenas me lo pase pirata ademas aprendi a comerme Monitores 4k. No tengo watsap solo Mail</p>
          <div className='home-review-developer'>
            <img className='home-person-review' src='https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687259001/UserFTProyect/vs86srsiqyurqmqeeppt.jpg' alt='person-review'></img>

            <div className='home-nameJob-person'>
              <p className='home-person'>Aitor Cifuentes</p>
              <p className='home-job'>Pascal Developer</p>
            </div>
          </div>

        </figure>

      </section>

    </div>

    </div>

  )
  
};
