import logo from './logo.svg';
import './App.css';
import ContactoApp from './components/a';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ContactoApp></ContactoApp>
    </div>
  );
}

export default App;
