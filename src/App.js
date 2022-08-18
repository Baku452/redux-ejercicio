import "./App.css"
import Filtro from "./components/Filtro"
import ListaBoton from "./components/ListaBoton"
import TotalVotos from "./components/TotalVotos"
import VotosIndividuales from "./components/VotosIndividuales"

function App() {
 return (
    <div className="App">
        <ListaBoton />
        <VotosIndividuales />
        <TotalVotos />
        <Filtro />
    </div>
 )
}

export default App
