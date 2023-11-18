import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formState, setFormState] = useState({});

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const config = {
      SecureToken: "3758f4a0-d3f8-41bf-9dcd-c1eb8c25712d",
      To: "enchanther69@gmail.com",
      From: formState.email,
      Subject: "EnchanthHer Contact Form",
      Body: `${formState.name} Signed Up`,
    };

    if (window.Email) {
      window.Email.send(config).then(() => {
        alert("Sign Up to EnchanthHer Succesfully");
        console.log(config)
      });
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={submitHandler}>
          <h3>Contact</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formState.name || ""}
            onChange={changeHandler}
            class="name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formState.email || ""}
            onChange={changeHandler}
            class="email"
            required
          />
          <input type="submit" value="Send Email" class="button" />
        </form>
      </div>
    </>
  );
};

export default ContactForm;
