import "swiper/css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import RouteLinks from "./config/RouteLinks";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouteLinks />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
