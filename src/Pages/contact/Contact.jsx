//@ts-check
import React from 'react';
import WideDisplayImage from '../../assets/contact_page.png';
import BreadCrumbs from '../../Components/breadCrumbs/BreadCrumbs';
import { PageHeading } from '../../Components/PageHeading/PageHeading';
import { Helmet } from 'react-helmet';
import style from './Contact.module.scss';

import { PrimaryButton } from '../../Components/Buttons/Buttons';

/**@type {React.FC<any>} */
const Contact = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Helmet>
        <title>GUEST ME - Contact</title>
      </Helmet>
      <PageHeading text="Contact" />
      <BreadCrumbs currentPosition="Contact" />
      <div className={style.contactContainer}>
        <form className={style.formContainer} onSubmit={handleSubmit}>
          <h3 className={style.heading}>Contact our team!</h3>
          <p className={style.description}>
            Please fill out the form below, and click send.
          </p>
          <div className={style.inputFieldContainer}>
            <div>
              <label className={style.label} htmlFor="firstName">
                First name*
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First"
                autoComplete="given-name"
                className={style.input}
              />
            </div>
            <div>
              <label className={style.label} htmlFor="lastName">
                Last name*
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last"
                autoComplete="family-name"
                className={style.input}
              />
            </div>
            <label className={style.label} htmlFor="email">
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@gmail.com"
              className={style.input}
              autoComplete="email"
            />
            <label className={style.label} htmlFor="message">
              Message*
            </label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              className={style.textarea}
            />
          </div>
          <div className={style.buttonContainer}>
            <PrimaryButton text="Send" />
          </div>
        </form>
        <div className={style.imageContainer}>
          <img
            src={WideDisplayImage}
            alt="person"
            className={style.featureImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
