import './App.scss';
import { Data } from './Store';
import 'bootstrap/dist/css/bootstrap.css';
import './button.scss';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Messages from './Components/Messages';

function App() {


  return (
    <Data>
      <Nav />
      <Main />
      <Messages />
    </Data>
  );
}

export default App;
