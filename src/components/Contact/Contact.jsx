import React from "react";
import contactStyle from "./contact.module.css"

const Contact = () => {
  return ( 
    <div className={contactStyle.contact}>
      <h2 className={contactStyle.contact__title}>Become a contributor?</h2>
      <p className={contactStyle.contact__paragraph}>Join us and get tips & tricks to become a great Designer and Developer</p>
      <form action="/#" className={contactStyle.contact__form}>
        <fieldset className={contactStyle.contact__info}>
          <div className={contactStyle.contact__block__input}>
            <input type="emial"
             className={contactStyle.contact__input} 
             name="email" 
             id="mail"
             placeholder="Enter your email..."
             required
             />
            <button className={contactStyle.contact__button}>Join Us</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
 
export default Contact;