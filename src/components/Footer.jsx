import './Footer.css';

const Footer = () => {
  
  return (
    
    <footer>

      <div className='footer-information-container'>

        <div className='footer-infotmation'>
          <p className='footer-infotmation-title'>Nos encantaría que te unieras a nosotros</p>
          <p className='footer-information-description'>No te convertiste en desarrollador independiente para pasar horas cada semana <br></br>
            frente a tu ordenador desplazándote a través de interminables listas de trabajos</p>
        </div>

        <div className='footer-container-img'>
          <img src='https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687191076/ProjectFinalBOOTCAMP/LogoWeb/logoWEBfinalProject_qvzlbq.png' alt="icon" className='footer-icon'></img>
          <p className='footer-icon-p'>Code</p>
        </div>

      </div>

      <div className='footer-container-form'>

        <p className='footer-form-title'>Contacta</p>

        <form className='footer-form' action="mailto:teammates.neoland23@gmail.com" method="post">

        <label for="name">Nombre:
        <input className='footer-input-text' type="text" id="name" name="name" required/></label>
      
        <label for="mail">Correo electrónico:
        <input className='footer-input-text' type="email" id="mail" name="mail" required/></label>

        <label for="message">Mensaje:
        <input className='footer-input-text' id="message" name="message"  required/></label>

        <input className='footer-input-submit' type="submit" value="Contactar"/>

        </form>

      </div>
      
    </footer>

  );
};

export default Footer;
