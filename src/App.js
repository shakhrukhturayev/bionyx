import { Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  About,
  Delivery,
  Footer,
  Goverment,
  Header,
  Navbar,
  Products,
  Testimonals,
} from "./components";
import { styles } from "./util/style";
import { useTranslation } from "react-i18next";
import "./i18n";

const LanguageWrapper = ({ children }) => {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const pathLang = location.pathname.split("/")[1]; // `/ru`, `/en` dan tilni olish
    if (["uz", "ru"].includes(pathLang)) {
      i18n.changeLanguage(pathLang);
    }
  }, [location, i18n]);

  return children;
};



function App() {
  return (
    <Router>
      <LanguageWrapper>
        <Routes>
          <Route path="/" element={<Navigate to ="/uz"/>} /> {/* Default sahifa */}
          <Route path="/:lang" /> {/* /ru yoki /en ga moslashish */}
        </Routes>
        <div className={`${styles.container} w-full`}>
          <div
            className={`bg-slate-50 w-full ${styles.PaddingX} ${styles.container}`}
          >
            <Navbar />
          </div>
          <div className={`${styles.container} w-full`}>
            <Header />
            <Goverment />
            <Products />
            <Delivery />
            <Testimonals />
            <About />
            <Footer />
          </div>
        </div>
      </LanguageWrapper>
    </Router>
  );
}

export default App;
