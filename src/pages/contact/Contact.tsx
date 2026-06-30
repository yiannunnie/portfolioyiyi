import "./style.css";

const BASE_URL = import.meta.env.BASE_URL;

export const Contact = () => {
  return (
    <div className="contacto-fondo">
      <div className="contactoPrincipal">
        <form
          className="elContacto"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="4087ebc0-15e2-45a8-b733-8145c8c28973"
          />

          <div className="input-apartado">
            <input type="text" name="name" placeholder=" " required />
            <label htmlFor="name">Your name</label>
          </div>

          <div className="input-apartado">
            <input type="email" name="email" placeholder=" " required />
            <label htmlFor="email">Your email</label>
          </div>

          <div className="input-apartado">
            <textarea name="message" placeholder=" " required></textarea>
            <label htmlFor="message">Your message</label>
          </div>

          <button type="submit" className="send">
            Send
          </button>
        </form>

        <div className="miInfo">
          <p>
            <strong>Yixuan Xu</strong>
          </p>
          <p>Valencia</p>
          <p>Valencia, Spain</p>

          <a
            href="mailto:itsyix21@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="gmail"
          >
            <img src={`${BASE_URL}icons/mail.png`} alt="Mail" />
          </a>
        </div>
      </div>
    </div>
  );
};
