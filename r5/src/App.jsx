
import './App.scss';
import CreateButton from './Components/CreateButton';
import CreateModal from './Components/CreateModal';
import { Data } from './Store';

function App() {
  return (
    <Data>
      <div className="app">
        <CreateButton />
        <CreateModal />
      </div>
    </Data>
  );
}

export default App;
