// import logo from './logo.svg';
import ParticlesBg from 'particles-bg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

//Particles code:
// <ParticlesBg type="cobweb" bg={true} />

//Tilt which will be in the Logo.js file
//import Tilt from 'react-parallax-tilt';
//in the body will be the same as the old tilt code.