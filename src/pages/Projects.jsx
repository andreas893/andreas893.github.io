import ProjectSlider from "../components/ProjectSlider"
import Footer from "../components/Footer"
import Nav from "../components/Nav"

const projects = () => {
  return (
    <main>
      <Nav />
      <section className='projekt-heading'>
        <h1>PROJEKTER</h1>
      </section>

      <section className='horisontal-container'>
        <ProjectSlider />
      </section>
      
       <section className='projekt-heading'>
        <h1>PROJEKTER</h1>
      </section>
      <Footer />
    </main>
  )
}

export default projects