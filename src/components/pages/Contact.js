import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [user_name, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const form = useRef();

  const sendForm = (event) => {
    event.preventDefault();
    if (message.length < 20) {
      setErrMessage("Please enter a message longer than 20 characters");
      return;
    } else if (!user_name.length || !user_email.length) {
      setErrMessage("Please fill out all fields");
      return;
    } else if (!validateEmail(user_email)) {
      setErrMessage("Please enter a valid email address!");
      return;
    }
    emailjs
      .sendForm(
        "service_7027r7w",
        "template_upad10i",
        form.current,
        "nJWi2gcp7w5X2l878"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmail("");
          setName("");
          setMessage("");
          setErrMessage("");
          setErrMessage("Your message was sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendForm} className="w-50 contact-form">
      <div className="form-group">
        <label htmlFor="nameInput">Name</label>
        <input
          type="text"
          className="form-control"
          value={user_name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="emailInput">Email address</label>
        <input
          type="email"
          className="form-control"
          value={user_email}
          onChange={(e) => setEmail(e.target.value)}
          id="emailInput"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        ></input>
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="messageInput">Message</label>
        <input
          type="text"
          className="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="messageInput"
          placeholder="Message"
        ></input>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <p>{errMessage}</p>
    </form>
  );
}

Contact.displayName = "Contact";
export default Contact;
