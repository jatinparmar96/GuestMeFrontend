import { Route, Routes } from 'react-router-dom';

import { Footer } from './containers/footer/Footer';
import { Header } from './containers/header/Header';

import { FindASpeaker } from './pages/findASpeaker/FindASpeaker';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';

import styles from './App.module.scss';
import RequireAuth from './auth/RequireAuth';
import SpeakerUpdateProfile from './components/speakerUpdateProfile/SpeakerUpdateProfile';
import BookSpeaker from './pages/bookSpeaker/BookSpeaker';
import ViewSpeaker from './pages/viewSpeaker/ViewSpeaker';
// Required for calendar
import { useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import { useRecoilState } from 'recoil';

import LandingPage from './pages/landing/LandingPage';
import tokenAtom from './recoil/authentication/atom';
import SpeakerBooking from './pages/speakerBooking/SpeakerBooking';

/**@type {React.FC<any>} */
const App = () => {
  const [, setUser] = useRecoilState(tokenAtom);
  useEffect(() => {
    const speaker = localStorage.getItem('speaker');
    const organization = localStorage.getItem('organization');
    const token = localStorage.getItem('token');
    const user = speaker || organization;
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
            path="/speakers/update/profile"
            element={
              <RequireAuth type="speaker">
                <SpeakerUpdateProfile />
              </RequireAuth>
            }
          />
          <Route
            path="/speakers/bookings"
            element={
              <RequireAuth type="speaker">
                <SpeakerBooking />
              </RequireAuth>
            }
          />

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
