import { Navbar } from "./components/Navbar"
import { Routes } from "./routes"

function App() {
  return (
    <main className="App">
      <Navbar/>
      <Routes/> {/*Renderiza las vistas por medio del archivo de rutas*/}
    </main>    
  )
}

export default App
