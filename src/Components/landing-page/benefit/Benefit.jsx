import { ReactComponent as BenefitLogo1 } from '../../..//assets/icons/benefit-icon-1.svg';
import { ReactComponent as BenefitLogo2 } from '../../../assets/icons/benefit-icon-2.svg';
import { ReactComponent as BenefitLogo3 } from '../../../assets/icons/benefit-icon-3.svg';
import { ReactComponent as BenefitLogo4 } from '../../../assets/icons/benefit-icon-4.svg';

import style from './Benefit.module.scss';
const Benefit = () => {
  const benefitsLogos = [
    {
      logo: <BenefitLogo1 />,
      text: 'Welcome a variety of speakers from professional to amateur',
    },
    {
      logo: <BenefitLogo2 />,
      text: 'Browse and compare speakers depending on the topic and budget',
    },
    {
      logo: <BenefitLogo3 />,
      text: "Check speaker's availability in their calendar and instantly message them",
    },
    {
      logo: <BenefitLogo4 />,
      text: 'No commission or transaction fees charged',
    },
  ];

  return (
    <>
      {benefitsLogos.map((benefit, index) => (
        <div key={index} className={style.benefitContainer}>
          <div className={style.benefitLogo}>{benefit.logo}</div>
          <p className={style.benefitText}>{benefit.text}</p>
        </div>
      ))}
    </>
  );
};

export default Benefit;
