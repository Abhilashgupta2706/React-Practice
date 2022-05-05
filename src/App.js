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
      </Routes>

    </div>
  );
}

export default App;
