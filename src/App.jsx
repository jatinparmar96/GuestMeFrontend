import { Route, Routes } from 'react-router-dom';

import { Footer } from './Containers/Footer/Footer';
import { Header } from './Containers/Header/Header';

import { FindASpeaker } from './Pages/FindASpeaker/FindASpeaker';
import { Login } from './Pages/Login/Login';
import { Register } from './Pages/Register/Register';

import styles from './App.module.scss';
import SpeakerUpdateProfile from './Components/SpeakerUpdateProfile/SpeakerUpdateProfile';
import ViewSpeaker from './Pages/ViewSpeaker/ViewSpeaker';
// Required for calendar
import { useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import { useRecoilState } from 'recoil';
import LandingPage from './Pages/landing/LandingPage';
import tokenAtom from './Recoil/Authentication/atom';

/**@type {React.FC<any>} */
const App = () => {
  const [user, setUser] = useRecoilState(tokenAtom);
  useEffect(() => {
    const speaker = localStorage.getItem('speaker');
    const organization = localStorage.getItem('organization');
    const token = localStorage.getItem('token');
    const user = speaker || organization;
    setUser({ name: user, value: token });
  }, []);
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
            element={<SpeakerUpdateProfile />}
          />
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
