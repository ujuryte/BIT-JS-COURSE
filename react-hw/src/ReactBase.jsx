import './App.scss';
import Labas from './Components/04-05/Labas';
import MoreProps from './Components/04-05/Moreprops';
import ThreeProps from './Components/04-05/ThreeProps';
import Zoo from './Components/04-05/Zoo';
import Props from './Components/04-05/props';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        
        <Labas />

        <Props zodis='Hello' />

        <Zoo col='2' />

        <MoreProps h1='H1' h2='H2' />

        <ThreeProps tekstas='sveiki' darTeksto='visi' spalva='blue' />

      </header>
    </div>
  );
}

export default App;
