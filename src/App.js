import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import ParticlesJS from './components/ParticlesJS/ParticlesJS';
import Home from './components/Home/Home';
import TextAnimation from './components/TextAnimation/TextAnimation';
import InteractiveBG from './components/InteractiveBG/InteractiveBG';
import CircularMenu from './components/CircularMenu/CircularMenu';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/particles-js' element={<ParticlesJS />} />
      </Routes>

      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route exact path='/text-animation' element={<TextAnimation />} />
        <Route exact path='/interactive-3d-background' element={<InteractiveBG />} />
        <Route exact path='/circular-menu' element={<CircularMenu />} />
        <Route exact path='/contact-form' element={<ContactForm />} />
        <Route element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
