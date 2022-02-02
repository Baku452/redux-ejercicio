import "./App.css"
import ListaBoton from "./components/ListaBoton"
import TotalVotos from "./components/TotalVotos"
import VotosIndividuales from "./components/VotosIndividuales"

function App() {
 return (
  <div className="App">
   <ListaBoton></ListaBoton>
   <VotosIndividuales />
   <TotalVotos />
  </div>
 )
}

export default App
