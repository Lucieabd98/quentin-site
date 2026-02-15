import "./contact.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import quentinImg from "../../assets/imgs/quentin-face.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact">
      <hr />
      <div className="contact-container">
        <Helmet>
          <meta
            name="description"
            content="composition musicale · production sonore · sound design"
          />
        </Helmet>

        <div className="contact-infos">
          <div className="right-column">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Nom*"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <input
                type="email"
                name="mail"
                id="mail"
                required
                placeholder="Mail*"
                value={mail}
                onChange={(event) => {
                  setMail(event.target.value);
                }}
              />
              <div className="message-icon">
                <textarea
                  name="message"
                  id="message"
                  required
                  placeholder="Message*"
                  value={message}
                  onChange={(event) => {
                    setMessage(event.target.value);
                  }}
                ></textarea>
                <button className="submit-form" type="submit">
                  <FontAwesomeIcon icon="paper-plane" className="paper-plane" />
                </button>
              </div>
            </form>
          </div>
          <div className="contact-left-column">
            <div>
              <img src={quentinImg} alt="quentin's face" />
            </div>
            <div className="infos">
              <p>Quentin Abadia</p>
              <p>Paris</p>
              <p>quentin.abadia@gmail.com</p>
              <p>+33 6 47 73 21 84</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
