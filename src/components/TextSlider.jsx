import "../textSlider.css";

const TextSlider = () => {
    const items = [
    "FIGMA",
    "REACT",
    "CSS",
    "HTML",
    "GSAP",
    "PHOTOSHOP",
    "ILLUSTRATOR",
    "JAVASCRIPT"
  ];

  return (
    <div className="text-slider">
      <div className="slider-track">
        {items.concat(items).map((item, index) => ( // 👈 duplicate items
          <span className="slider-item" key={index}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TextSlider