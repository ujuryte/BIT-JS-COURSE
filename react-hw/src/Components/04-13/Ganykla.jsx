
import Avys from "./Avys";
import Karves from "./Karves";


export default function Ganykla() {

    

    return (
      <>
        <div className="field" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "100vh" }}>
          <div className="side">
          <Karves />
          </div>
          <div className="side">
          <Avys />
          </div>
        </div>

        <button>I ganykla</button>
        </>
      );
}