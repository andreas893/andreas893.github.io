import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../details.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const videoRef = useRef(null);

  // Load project data
  useEffect(() => {
    async function getData() {
      const response = await fetch("/data/projects.json");
      const data = await response.json();
      const found = data.find((p) => p.id.toString() === id);
      setProject(found);
    }
    getData();
  }, [id]);

  // Autoplay video when in view
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const handleScroll = () => {
      const rect = v.getBoundingClientRect();
      const vpH = window.innerHeight;
      const vpCenter = vpH / 2;
      const elCenter = rect.top + rect.height / 2;
      const tolerance = 300;

      if (Math.abs(elCenter - vpCenter) <= tolerance) {
        const p = v.play();
        if (p?.catch) p.catch(() => {}); // ignore autoplay promise errors
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [project]);

  // Animate elements on scroll
  useEffect(() => {
    if (!project) return;

    const elements = document.querySelectorAll(
      ".details-grid > div, .main-video-wrapper, .detail-image-grid > div, .second-image-grid > div, .content-grid > div"
    );

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 }, // start
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%", // works better on small screens
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Refresh after images/videos are fully loaded
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [project]);

  if (!project) return <p>Loading...</p>;

  return (
    <main>
      <Nav />
      <section className="main-bg">
        <div className="main-heading-container">
          <h1 className="main-heading">{project.title}</h1>
        </div>

        <div className="content-wrapper">
          <section className="details-grid">
            <div className="year-content">
              <h3>ÅR</h3>
              <p>{project.year}</p>
            </div>

            <div className="kompetencer-content">
              <h3>KOMPETENCER</h3>
              <p>{project.kompetencer.join(", ")}</p>
            </div>

            <div className="opgave-content">
              <h3>OPGAVEN</h3>
              <p>{project.opgaven}</p>
            </div>
          </section>

          <div className="main-video-wrapper">
            <video
              muted
              loop
              playsInline
              ref={videoRef}
              src={project.video}
              preload="metadata"
              type="video/mp4"
              alt={project.title}
            />
          </div>

          <div className="detail-image-grid">
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
      <Footer />
    </main>
  );
};

export default ProjectDetails;
