

import { ReactComponent as AccountIcon } from '../../assets/icons/account-icon.svg';
import { ReactComponent as AvailabilityIcon } from '../../assets/icons/availability-icon.svg';
import { ReactComponent as BookingsIcon } from '../../assets/icons/bookings-icon.svg';
import { ReactComponent as InfoIcon } from '../../assets/icons/info-icon.svg';

export const SpeakerMenu = [
  {
    title: 'My Info',
    path: '/speakers/mypage',
    icon: <InfoIcon />,
  },
  {
    title: 'Bookings',
    path: '/speakers/mypage/bookings',
    icon: <BookingsIcon />,
  },
  {
    title: 'Availability',
    path: '/speakers/mypage/availability',
    icon:   <AvailabilityIcon />,
  },
  {
    title: 'Account',
    path: '/speakers/mypage/account',
    icon: <AccountIcon />,
  }
]