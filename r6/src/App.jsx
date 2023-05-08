import './App.scss';
import { Data } from './Store';
import 'bootstrap/dist/css/bootstrap.css';
import './button.scss';
import Nav from './Components/Nav';
import Main from './Components/Main';

function App() {


  return (
    <Data>
      <Nav />
      <Main />

    </Data>
  );
}

export default App;
