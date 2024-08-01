import logo from './logo.svg';
import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/all.min.css';
import './assets/css/animate.css';
import './assets/plugins/slider/css/owl.carousel.min.css';
import './assets/plugins/slider/css/owl.theme.default.css';
import './assets/css/style.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { AboutUs } from './AboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          {/* <Route path="contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
