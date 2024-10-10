import React from "react";
import { About, Carousel, Delivery, Footer, Goverment, Header, Navbar, Products, Testimonals } from "./components";
import { styles } from "./util/style";



function App() {
  return (
    <div className={`${styles.container} w-full`}>
      <div className={`bg-slate-50 w-full ${styles.PaddingX} ${styles.container}`}>
        <Navbar />
      </div>
      <div className={`${styles.container} w-full`}>
        <Header />
        <Goverment/>
        <Products />
        <Delivery/>
        <Testimonals/>
        <About/>
        <Footer/>
      </div>

    </div>

  );
}

export default App;
