import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Footer from "../components/Footer";

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    
    useEffect(() => {
    async function getData() {
      const response = await fetch("/projects.json");
      const data = await response.json();
      const found = data.find((p) => p.id.toString() === id);
      setProject(found);
    }
    getData();
  }, [id]);

   if (!project) return <p>Loading...</p>;
    
  return (
    <main>
      <Nav />
        <section className="main-bg">
            <h1 className="main-heading">{project.title}</h1>

            <div className="content-wrapper">
                <section className="details-grid">
                    <div className="year-content">
                        <h3>ÅR</h3>
                        <p>{project.year}</p>
                    </div>

                    <div className="kompetencer-content">
                        <h3>KOMPETENCER</h3>
                        <p>{project.kompetencer}</p>
                    </div>

                    <div className="opgave-content">
                        <h3>OPGAVEN</h3>
                        <p>{project.opgaven}</p>
                    </div>
                </section>
                
                <div className="main-video-wrapper">
                     <img src={project.video} alt={project.title} />
                </div>
                
                <div className="image-grid">
                    <div className="g-i-first">
                        <img src={project.image[1]} alt={project.title} />
                    </div>

                    <div className="g-i-second">
                        <img src={project.image[2]} alt={project.title} />
                    </div>
                </div>

                <div className="second-image-grid">
                    <div className="s-g-f">
                        <img src={project.image[3]} alt={project.title} />
                    </div>

                    <div className="s-g-s">
                        <img src={project.image[4]} alt={project.title} />
                    </div>
                </div>

                <div className="content-grid">
                    <div className="purpose">
                        <h3>FORMÅL</h3>
                        <p>{project.purpose}</p>
                    </div>

                    <div className="result">
                        <h3>LÆRING</h3>
                        <p>{project.result}</p>
                    </div>  
                </div>
            </div>
        </section>
      <Footer/>
    </main>
  )
}

export default ProjectDetails