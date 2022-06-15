import React from "react";

import Navbar from "./components/Navbar";
import Routes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
