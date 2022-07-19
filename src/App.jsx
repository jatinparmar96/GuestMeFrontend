import { Route, Routes } from 'react-router-dom';

import { Footer } from './Containers/Footer/Footer';
import { Header } from './Containers/Header/Header';

import { FindASpeaker } from './Pages/FindASpeaker/FindASpeaker';
import { Login } from './Pages/Login/Login';
import { Register } from './Pages/Register/Register';

import styles from './App.module.scss';
import RequireAuth from './auth/RequireAuth';
import SpeakerAccount from './Components/SpeakerAccount/SpeakerAccount';
import SetSpeakerAvailability from './Components/SpeakersAvailability/SpeakerSetAvailability';
import SpeakerUpdateProfile from './Components/SpeakerUpdateProfile/SpeakerUpdateProfile';
import About from './Pages/about/About';
import BookSpeaker from './Pages/BookSpeaker/BookSpeaker';
import MyPage from './Pages/MyPage/MyPage';
import SpeakerBooking from './Pages/SpeakerBooking/SpeakerBooking';
import ViewSpeaker from './Pages/ViewSpeaker/ViewSpeaker';
// Required for calendar
import { useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import { useRecoilState } from 'recoil';

import Contact from './Pages/contact/Contact';
import HowItWorks from './Pages/howItWorks/HowItWorks';

import './App.module.scss';

import LandingPage from './Pages/landing/LandingPage';
import tokenAtom from './Recoil/Authentication/atom';

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);
/**@type {React.FC<any>} */
const App = () => {
  const [, setUser] = useRecoilState(tokenAtom);
  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    setUser({ name: JSON.parse(user), value: token });
  }, [setUser]);
  return (
    <div className={`${styles.wrapper} App`}>
      <Header></Header>
      <main className={styles.main}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/find-a-speaker" element={<FindASpeaker />} />
          <Route path="/speakers/:id" element={<ViewSpeaker />} />
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/speakers/mypage"
            element={
              <RequireAuth type="speaker">
                <MyPage />
              </RequireAuth>
            }
          >
            <Route path="/speakers/mypage/update" element={<SpeakerUpdateProfile />} />
            <Route
              path="/speakers/mypage/bookings"
              element={<SpeakerBooking />}
            />
            <Route
              path="/speakers/mypage/availability"
              element={<SetSpeakerAvailability />}
            />
            <Route
              path="/speakers/mypage/account"
              element={<SpeakerAccount />}
            />
          </Route>
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route
            path="/speakers/bookings"
            element={
              <RequireAuth type="speaker">
                <SpeakerBooking />
              </RequireAuth>
            }
          /> */}

          <Route
            path="/speakers/:id/request"
            element={
              <RequireAuth type="organization">
                <BookSpeaker />
              </RequireAuth>
            }
          />
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
