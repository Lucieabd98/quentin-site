import "./contact.css";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <div className="contact-infos">
        <div className="left-column">
          <p>quentin.abadia@gmail.com</p>
        </div>
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
              name="email"
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
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
