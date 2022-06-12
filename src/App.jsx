import { Route, Routes } from "react-router-dom";

import { Footer } from "./Containers/Footer/Footer";
import { Header } from "./Containers/Header/Header";

import { Register } from "./Pages/Register/Register";

import styles from "./App.module.scss";
import { SpeakerProfile } from "./Pages/SpeakerProfile/SpeakerProfile";

/**@type {React.FC<any>} */
const App = () => {
  return (
    <div className={`${styles.wrapper} App`}>
      <Header></Header>
      <main className={styles.main}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route
            path="/speaker-profile:speakerId"
            element={<SpeakerProfile />}
          />
          <Route path="/" element={<Register />} />
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
