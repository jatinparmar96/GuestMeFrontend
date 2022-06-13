import { Route, Routes } from 'react-router-dom';

import { Footer } from './Containers/Footer/Footer';
import { Header } from './Containers/Header/Header';

import { Register } from './Pages/Register/Register';
import { Login } from './Pages/Login/Login';

import styles from './App.module.scss';
import { SpeakerProfile } from './Pages/SpeakerProfile/SpeakerProfile';

/**@type {React.FC<any>} */
const App = () => {
  return (
    <div className={`${styles.wrapper} App`}>
      <Header></Header>
      <main className={styles.main}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/speaker-profile:speakerId"
            element={<SpeakerProfile />}
          />
          <Route path="/" />
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
