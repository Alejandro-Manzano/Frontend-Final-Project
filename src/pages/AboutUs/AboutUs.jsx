import './aboutUs.css';

const template = () => {
  return `
    <section class="contact">
      <div class="contactForm">
        <h1 class="colorAboutH1">Contact <span>Us</span></h1>
        <p class="colorAboutP">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde saepe
          iusto molestiae expedita?
        </p>
        <form action="https://formsubmit.co/e2108cb67e6f8a361ae1f069e34cd91a" method="POST">
          <input type="" placeholder="Your Name" required />
          <input
            type="email"
            name="email"
            id="formularioEmail"
            placeholder="E-mail"
            required
          />
          <input type="" id="formTopic"placeholder="Topic" required />
          <textarea
            name=""
            id="formTextArea"
            cols="30"
            rows="10"
            placeholder="More information"
          >
          </textarea>
          <button type="button" class="btn">Submit</button>
        </form>
      </div>
      <div class="contactImg">
        <img
          src="https://res.cloudinary.com/djglk3cso/image/upload/v1683624788/Dise%C3%B1o_sin_t%C3%ADtulo_1_gmqgat.png"
        />
      </div>
    </section>
  `;
};
