import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7xrw87q",
        "template_dms2joe",
        form.current,
        "9vfPhOf69TDf3wwM9"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-us-farm container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
          <p style={{ color: "#41c9ff" }}>CONTACT ME</p>
          <form className="contact-us" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              className="submit-input"
              style={{
                color: "#000000",
                backgroundColor: "#ffffff;",
                borderRadius: "5px;",
              }}
              type="text"
              name="user_name"
              placeholder="Enter Your Name"
              required
            />
            <label>Email</label>
            <input
              className="submit-input"
              style={{
                color: "#000000",
                backgroundColor: "#ffffff;",
                borderRadius: "5px;",
              }}
              type="email"
              name="user_email"
              placeholder="Enter Your Email Id"
              required
            />
            <label>Message</label>
            <textarea
              rows="5"
              name="message"
              placeholder="Enter Your Message"
              required
            />
            <input className="submit-btn" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};
