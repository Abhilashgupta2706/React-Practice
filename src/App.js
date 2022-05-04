import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import ParticlesJS from './components/ParticlesJS/ParticlesJS';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/particles-js' element={<ParticlesJS />} />
      </Routes>

      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
