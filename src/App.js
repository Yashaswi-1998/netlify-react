import logo from './logo.svg';
// import cat from './images/cat.jpeg'
// import dog from './images/catDogOne.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src='../images/cat.jpeg' alt="Cat" />
        <img src='../images/catDogOne.jpeg' alt="Dog" />
        <img src="https://placebeard.it/200x300" alt="Bird" />
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
