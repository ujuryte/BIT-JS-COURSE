import './App.scss'
import Books from "./Components/Books";
import { StoreProvider } from "./Store";


function App() {



  return (
    <StoreProvider>
      <div className="app">

        <Books />

      </div>
    </StoreProvider>

  );
}

export default App;
