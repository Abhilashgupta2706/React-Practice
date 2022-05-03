import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Particles from './components/ParticlesJS/Particles';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>

          <Route exact path='React-Practice/' element={<Home />} />
          <Route exact path='React-Practice/particles-js' element={<Particles />} />


        </Routes>

      </Router>
    </div>
  );
}

export default App;
