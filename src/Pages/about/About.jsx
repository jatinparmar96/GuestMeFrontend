//@ts-check
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Arvind from '../../assets/members/Arvind.png';
import Gabriela from '../../assets/members/Gabriela.png';
import Jatin from '../../assets/members/Jatin.png';
import Koichi from '../../assets/members/Koichi.png';
import Noriko from '../../assets/members/Noriko.png';
import Satveer from '../../assets/members/Satveer.png';
import Valentina from '../../assets/members/Valentina.png';
import BreadCrumbs from '../../Components/breadCrumbs/BreadCrumbs';
import { ContactLinkButton } from '../../Components/Buttons/Buttons';
import { PageHeading } from '../../Components/PageHeading/PageHeading';

import { motion } from 'framer-motion';
import Member from './components/member/Member';

import style from './About.module.scss';
const About = () => {
  return (
    <>
      <Helmet>
        <title>GUEST ME - About</title>
      </Helmet>
      <PageHeading text="About" />
      <BreadCrumbs currentPosition="About" />

      <motion.div
        className={style.background}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={style.pageContainer}>
          <div className={style.contentContainer}>
            <h3 className={style.heading}>
              About <span className={style.fontMint}>Our Team</span>
            </h3>
            <div className={style.description}>
              <p className={style.description__text}>
                Our team of like-minded designers and developers is ready to
                take on complex projects with passion and enthusiasm!
              </p>
              <div className={style.contactButtonContainer}>
                <ContactLinkButton to="/contact" text="Contact us" />
              </div>
            </div>
            <div>
              <div className="designers">
                <h4 className={style.heading4}>Designer</h4>
                <div className={style.membersContainer}>
                  {designers.map((designer) => (
                    <Member member={designer} key={designer.name} />
                  ))}
                </div>
              </div>
              <div className="develoers">
                <h4 className={style.heading4}>Developer</h4>
                <div className={style.membersContainer}>
                  {developers.map((developer) => (
                    <Member member={developer} key={developer.name} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;

/**@type {import('./AboutPageType').Member[]} */
const designers = [
  {
    name: 'Valentina Abanina',
    role: 'Project Manager / UX/UI Designer',
    imageUrl: Valentina,
    linkedInLink: 'https://www.linkedin.com/in/valentina-abanina/',
    linkedInName: 'valentina-abanina',
    introduction:
      'Graduated with a Master degree in Fine Arts. Work experience includes Quality Management Specialist in Education, Photographer Supervisor and Drama Instructor.',
  },
  {
    name: 'Noriko Gondo',
    role: 'Lead Designer, UX/UI Designer',
    imageUrl: Noriko,
    linkedInLink: 'https://www.linkedin.com/in/norikogondo/',
    linkedInName: 'norikogondo',
    introduction:
      'Obtained Bachelor of Economics and International Business degrees. Worked as a Recruitment Consultant and freelance Web Designer.',
  },
  {
    name: 'Satveer Kaur',
    role: 'UX/UI Designer',
    imageUrl: Satveer,
    linkedInLink: 'https://www.linkedin.com/in/satveer-brar/',
    linkedInName: 'satveer-brar',
    introduction:
      'Bachelor of Computer Application, Master’s degree in computer science (Information Technology). Have experience in web development.',
  },
];

/**@type {import('./AboutPageType').Member[]} */
const developers = [
  {
    name: 'Jatin Parmar',
    role: 'Lead Developer, Full Stack Developer',
    imageUrl: Jatin,
    linkedInLink: 'https://www.linkedin.com/in/jatinparmar96/',
    linkedInName: 'jatinparmar96',
    introduction:
      'Holder of a Bachelor of Science degree in Computer Engineering. Extensive experience in developing ERP and Ecommerce web applications.',
  },
  {
    name: 'Gabriela Fernandez Chaves Arriola',
    role: 'Full Stack Developer',
    imageUrl: Gabriela,
    linkedInLink: 'http://www.linkedin.com/in/gabrielafchaves/',
    linkedInName: 'gabrielafchaves',
    introduction:
      'Bachelor of Accounting degree holder.  Extensive experience in Management Control and Logistic teams in Hospitality and Casino industry.',
  },
  {
    name: 'Arvind Kumar Suroju',
    role: 'Full Stack Developer',
    imageUrl: Arvind,
    linkedInLink: 'https://www.linkedin.com/in/arvindkumarsuroju/',
    linkedInName: 'arvindkumarsuroju',
    introduction:
      'Graduate of a Bachelor in Electronics and Communication Engineering. Experienced Application Engineer and Full Stack developer in the fin-tech industry.',
  },
  {
    name: 'Koichi Tanaka',
    role: 'Full Stack Developer',
    imageUrl: Koichi,
    linkedInLink: 'https://www.linkedin.com/in/koichi-tanaka/',
    linkedInName: 'koichi-tanaka',
    introduction:
      'Graduate of Bachelor of Information Expression and Informatics in Arts. Worked previously as a full stack web developer.',
  },
];

/**
 * @typedef {import('./AboutPageType').Member} Member
 */
