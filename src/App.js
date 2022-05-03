import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Particles from './components/ParticlesJS/Particles';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
        <Navbar />

        <Routes>

          <Route exact path='/' element={<Home />} />
          <Route exact path='/particles-js' element={<Particles />} />


        </Routes>

    </div>
  );
}

export default App;
