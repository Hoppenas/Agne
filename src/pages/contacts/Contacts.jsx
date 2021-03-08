import React, {useEffect} from 'react';
import emailjs from 'emailjs-com';
import './contacts.scss';
import Layout from "../../components/SiteLayout/Layout";

const Contacts = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_jbxuydx', 'template_kz0aa9p', e.target, 'user_esXQRmXlsciTuwc1DkWb5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  useEffect(() => {
      let el = document.getElementById(`myTextarea`);
      el.addEventListener("input", function() {
      if (el.scrollTop != 0)
        el.style.height = el.scrollHeight + "px";
      });
  });

    return (
      <Layout>
          <div className="contacts--wrapper">
            <form className="contact-form" onSubmit={sendEmail}>
              <h2>Your message for me!</h2>
              <div className="input-container">
                <input type="text" name="user_name" className="input" placeholder=" " />
                <label className="input-container__label">
                  Name
                </label>
              </div>
              <div className="input-container">
                <input type="text" name="contact_number" className="input" placeholder=" " />
                <label className="input-container__label">Phone number</label>
              </div>
              <div className="input-container">
                <input type="text" name="contact_number" className="input" placeholder=" " />
                <label className="input-container__label">Subject</label>
              </div>
              <div className="input-container">
                <input type="email" name="user_email" className="input" placeholder=" " />
                <label className="input-container__label">Email</label>
              </div>
              <div className="input-container">
                <textarea id="myTextarea" name="message" className="input" placeholder=" " maxlength="400" />
                <label className="input-container__label">Message</label>
              </div>
              <input type="submit" value="Send" className="input-button" />
            </form>
          </div>
      </Layout>
    );
  };

  export default Contacts;
