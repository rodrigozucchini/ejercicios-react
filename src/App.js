import logo from './logo.svg';
import './App.css';
//import Ejemplo4 from './components/children';
//import Clock from './components/ej-4-5-6';
import Clock4 from './components/ejj-4,5,6';
//import Ejemplo2 from './components/hooks';
//import ContactoApp from './components/a';
//import Ejemplo1 from './components/state';
//import MiComponenteConContexto from './components/useContent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/*<Ejemplo1></Ejemplo1>*/}
      {/*<Ejemplo2></Ejemplo2>*/}
      {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
      {/*<Ejemplo4 name="Rodrigo">
        <h3>
          Contenido del prop.children
        </h3>
      </Ejemplo4>*/}
      {/*<Clock></Clock>*/}
      <Clock4></Clock4>
    </div>
  );
}

export default App;
