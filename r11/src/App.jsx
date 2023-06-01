import './App.scss'
import Books from "./Components/Books";
import Menu from './Components/Menu';
import { StoreProvider } from "./Store";


function App() {



  return (
    <StoreProvider>
      <div className="app">
        
        <Books />
        <Menu/>
      </div>
    </StoreProvider>

  );
}

export default App;
