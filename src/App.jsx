import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import ProjectDetails from "./pages/ProjectDetails";
import Cursor from "./components/Cursor"
import ScrollReset from "./components/scrollReset"



function App() {
  


  return (
    <>
      <main>
        <Cursor />
        <ScrollReset />
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/om" element={<About />}/>
          <Route path="/projekter" element={<Projects />}/>
          <Route path="/kontakt" element={<Contact />}/>
          <Route path="/projekter/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
    </>
  )
}

export default App
