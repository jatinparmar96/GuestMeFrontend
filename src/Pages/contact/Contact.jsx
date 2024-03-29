//@ts-check
import { motion } from 'framer-motion';
import { React, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import BreadCrumbs from '../../Components/breadCrumbs/BreadCrumbs';
import { PrimaryButton } from '../../Components/Buttons/Buttons';
import AlertDialogContact from '../../Components/ModalPopup/ModalPopupContact';
import { PageHeading } from '../../Components/PageHeading/PageHeading';
import style from './Contact.module.scss';


/**@type {React.FC<any>} */
const Contact = (props) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [ buttonAction, setButtonAction ] = useState(false);

  const openPopup = () => {
  setPopupOpen(true);
  setButtonAction(true);
};

  const handleSubmit = (event) => {
    event.preventDefault();
    openPopup();
  };

  return (
    <div>
      <Helmet>
        <title>GUEST ME - Contact</title>
      </Helmet>
      <PageHeading text="Contact" />
      <BreadCrumbs currentPosition="Contact" />
      <AlertDialogContact
        open={popupOpen}
        buttonAction={buttonAction}
        popupOpen={popupOpen}
        setPopupOpen={setPopupOpen}
      />
      <div className={style.contact}>
      <motion.div
        className={style.contactContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
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
            <div className={style.inputSpan}>
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
            </div>
            <div className={style.inputSpan}>
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
          </div>
          <div className={style.buttonContainer}>
            <PrimaryButton text="Send" />
          </div>
        </form>
        <div className={style.imageContainer}>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
