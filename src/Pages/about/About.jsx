//@ts-check
import React from 'react';
import BreadCrumbs from '../../Components/breadCrumbs/BreadCrumbs';
import { ContactLinkButton } from '../../Components/Buttons/Buttons';
import { PageHeading } from '../../Components/PageHeading/PageHeading';

import Member from './components/member/Member';

import style from './About.module.scss';
const About = () => {
  return (
    <div className={style.pageContainer}>
      <PageHeading text="About" />
      <BreadCrumbs currentPosition="About" />
      <div>
        <h3>
          About <span className={style.fontMint}>Our Team</span>
        </h3>
        <div className={style.description}>
          <p className={style.description__text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur, blanditiis voluptate quidem repudiandae saepe placeat
            repellat neque voluptates quos voluptatibus ab temporibus vero
            dolorum corporis dolore eius excepturi? Sit, velit?
          </p>
          <ContactLinkButton to="/contact" text="Contact us" />
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
  );
};

export default About;

/**@type {import('./AboutPageType').Member[]} */
const designers = [
  {
    name: 'Valentina Abanina',
    role: 'Project Manager / Designer',
    imageUrl: 'https://picsum.photos/id/237/200/300',
    introduction:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores cupiditate sint, est enim deserunt animi aut explicabo optio ad beatae alias sapiente libero ipsa cum aliquam aliquid! Molestiae, magnam?',
  },
  {
    name: 'Noriko Gondo',
    role: 'Lead Designer',
    imageUrl: 'https://picsum.photos/id/238/200/300',
    introduction:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores cupiditate sint, est enim deserunt animi aut explicabo optio ad beatae alias sapiente libero ipsa cum aliquam aliquid! Molestiae, magnam?',
  },
  {
    name: 'Satveer Kaur',
    role: 'Designer',
    imageUrl: 'https://picsum.photos/id/239/200/300',
    introduction:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores cupiditate sint, est enim deserunt animi aut explicabo optio ad beatae alias sapiente libero ipsa cum aliquam aliquid! Molestiae, magnam?',
  },
];

/**@type {import('./AboutPageType').Member[]} */
const developers = [
  {
    name: 'Jatin Parmar',
    role: 'Lead Developer',
    imageUrl: 'https://testtasdf54grf.s3.ca-central-1.amazonaws.com/Jatin.png',
    introduction:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores cupiditate sint, est enim deserunt animi aut explicabo optio ad beatae alias sapiente libero ipsa cum aliquam aliquid! Molestiae, magnam?',
  },
  {
    name: 'Gabriela Fernandez Chaves Arriola',
    role: 'Developer',
    imageUrl: 'https://picsum.photos/id/241/200/300',
    introduction:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores cupiditate sint, est enim deserunt animi aut explicabo optio ad beatae alias sapiente libero ipsa cum aliquam aliquid! Molestiae, magnam?',
  },
  {
    name: 'Arvind Kumar Suroju',
    role: 'Developer',
    imageUrl: 'https://picsum.photos/id/242/200/300',
    introduction:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores cupiditate sint, est enim deserunt animi aut explicabo optio ad beatae alias sapiente libero ipsa cum aliquam aliquid! Molestiae, magnam?',
  },
  {
    name: 'Koichi Tanaka',
    role: 'Developer',
    imageUrl: 'https://picsum.photos/id/243/200/300',
    introduction:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores cupiditate sint, est enim deserunt animi aut explicabo optio ad beatae alias sapiente libero ipsa cum aliquam aliquid! Molestiae, magnam?',
  },
];

/**
 * @typedef {import('./AboutPageType').Member} Member
 */
