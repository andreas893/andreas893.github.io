import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"


function App() {
  

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/om" element={<About />}/>
          <Route path="/projekter" element={<Projects />}/>
          <Route path="/kontakt" element={<Contact />}/>
        </Routes>
      </main>
    </>
  )
}

export default App
