//@ts-check
import React from 'react';
import BreadCrumbs from '../../Components/breadCrumbs/BreadCrumbs';
import { ContactLinkButton } from '../../Components/Buttons/Buttons';
import { PageHeading } from '../../Components/PageHeading/PageHeading';
import { Helmet } from 'react-helmet';
import Noriko from '../../assets/members/Noriko.png';
import Satveer from '../../assets/members/Satveer.png';
import Valentina from '../../assets/members/Valentina.png';
import Arvind from '../../assets/members/Arvind.png';
import Gabriela from '../../assets/members/Gabriela.png';
import Jatin from '../../assets/members/Jatin.png';
import Koichi from '../../assets/members/Koichi.png';

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
      <div className={style.pageContainer}>
        <div className={style.contentContainer}>
          <h3 className={style.heading}>
            About <span className={style.fontMint}>Our Team</span>
          </h3>
          <div className={style.description}>
            <p className={style.description__text}>
              Our team of like-minded designers and developers is ready to take
              on complex projects with passion and enthusiasm!
            </p>
            <div className={style.contactButtonContainer}>
              <ContactLinkButton to="/contact" text="Contact us" />
            </div>
          </div>
          <div>
            <div className="designers">
              <h4 className={style.fontMint}>Designer</h4>
              <div className={style.membersContainer}>
                {designers.map((designer) => (
                  <Member member={designer} key={designer.name} />
                ))}
              </div>
            </div>
            <div className="develoers">
              <h4 className={style.fontMint}>Developer</h4>
              <div className={style.membersContainer}>
                {developers.map((developer) => (
                  <Member member={developer} key={developer.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

/**@type {import('./AboutPageType').Member[]} */
const designers = [
  {
    name: 'Valentina Abanina',
    role: 'Project Manager / Designer',
    imageUrl: Valentina,
    introduction:
      'Graduated with a Master degree in Fine Arts. Work experience includes Quality Management Specialist in Education, Photographer Supervisor and Drama Instructor.',
  },
  {
    name: 'Noriko Gondo',
    role: 'Lead Designer, UX/UI Designer',
    imageUrl: Noriko,
    introduction:
      'Obtained Bachelor of Economics and International Business degrees. Worked as a Recruitment Consultant and freelance Web Designer.',
  },
  {
    name: 'Satveer Kaur',
    role: 'UX/UI Designer',
    imageUrl: Satveer,
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
    introduction:
      'Holder of a Bachelor of Science degree in Computer Engineering. Extensive experience in developing ERP and Ecommerce web applications.',
  },
  {
    name: 'Gabriela Fernandez Chaves Arriola',
    role: 'Full Stack Developer',
    imageUrl: Gabriela,
    introduction:
      'Bachelor of Accounting degree holder.  Extensive experience in Management Control and Logistic teams in Hospitality and Casino industry.',
  },
  {
    name: 'Arvind Kumar Suroju',
    role: 'Full Stack Developer',
    imageUrl: Arvind,
    introduction:
      'Graduate of a Bachelor in Electronics and Communication Engineering. Experienced Application Engineer and Full Stack developer in the fin-tech industry.',
  },
  {
    name: 'Koichi Tanaka',
    role: 'Full Stack Developer',
    imageUrl: Koichi,
    introduction:
      'Graduate of Bachelor of Information Expression and Informatics in Arts. Worked previously as a full stack web developer.',
  },
];

/**
 * @typedef {import('./AboutPageType').Member} Member
 */
