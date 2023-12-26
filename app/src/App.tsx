import logo from './logo.svg';
import './App.css';

import Base from './pages/base'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Base />
      </header>
    </div>
  );
}

export default App;
