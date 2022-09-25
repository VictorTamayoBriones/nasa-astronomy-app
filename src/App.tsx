import { Navbar } from "./components/Navbar"
import { Routes } from "./routes"

function App() {
  return (
    <main className="App">
      <Navbar/>
      <section className="content" >
        <Routes/> {/*Renderiza las vistas por medio del archivo de rutas*/}
      </section>
    </main>    
  )
}

export default App
