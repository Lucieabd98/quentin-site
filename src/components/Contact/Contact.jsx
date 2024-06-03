import "./contact.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Quentin Abadia</title>
        <meta
          name="description"
          content="Remplissez vos informations afin d'être contacté par Quentin Abadia pour vos projets musicaux."
        />
      </Helmet>
      <h2>Contact</h2>
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
              placeholder="Nom"
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
              placeholder="Mail"
              value={mail}
              onChange={(event) => {
                setMail(event.target.value);
              }}
            />
            <textarea
              name="message"
              id="message"
              required
              placeholder="Message"
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            ></textarea>
            <button className="submit-form" type="submit">
              <FontAwesomeIcon icon="paper-plane" className="paper-plane" />
            </button>
          </form>
        </div>
        <div className="left-column">
          <p>quentin.abadia@gmail.com</p>
          <p>+33 6 47 73 21 84</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
