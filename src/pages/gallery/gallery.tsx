import { useState, useRef } from "react";

import foto1 from "../../assets/images/pkkmb2.png";
import foto2 from "../../assets/images/ultras1.jpg";
import foto3 from "../../assets/images/pkkmb.png";
import foto4 from "../../assets/images/pkkmb3.png";
import foto5 from "../../assets/images/villa4.png";
import foto6 from "../../assets/images/villa5.png";
import foto7 from "../../assets/images/villa6.png";
import foto8 from "../../assets/images/villa3.jpg";
import foto9 from "../../assets/images/villa.jpg";
import foto10 from "../../assets/images/perkenalan.jpg";
import foto11 from "../../assets/images/perkenalan2.jpg";

const slides = [
  {
    img: foto1,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    img: foto2,
    desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    img: foto3,
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    img: foto4,
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    img: foto5,
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    img: foto6,
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    img: foto7,
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    img: foto8,
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    img: foto9,
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    img: foto10,
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    img: foto11,
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  }
];

function Gallery() {
  const [active, setActive] = useState(1);
  const startX = useRef(0);

  const prev = (active - 1 + slides.length) % slides.length;
  const next = (active + 1) % slides.length;

  const onStart = (e: any) => {
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const onEnd = (e: any) => {
    const endX = e.changedTouches
      ? e.changedTouches[0].clientX
      : e.clientX;

    if (startX.current - endX > 50) setActive(next);
    if (endX - startX.current > 50) setActive(prev);
  };

  return (
    <section
      id="gallery"
      className="min-h-screen text-white flex flex-col items-center justify-center"
    >
      <p className="text-sm tracking-widest text-blue-900 uppercase opacity-60">
        sistem informasi 49 - 10
      </p>
      <h2 className="text-4xl font-bold text-blue-900 mb-12">Gallery</h2>

      <div
        className="flex items-center gap-12 select-none"
        onMouseDown={onStart}
        onMouseUp={onEnd}
        onTouchStart={onStart}
        onTouchEnd={onEnd}
      >
        {[prev, active, next].map((i, idx) => (
          <div
            key={i}
            className={`rounded-xl overflow-hidden transition-all duration-500
              ${idx === 1
                ? "w-[700px] h-[380px] opacity-100"
                : "w-64 h-80 opacity-40"
              }`}
          >
            <img
              src={slides[i].img}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-3 h-3 rounded-full transition
              ${i === active ? "bg-white" : "bg-gray-400"}`}
          />
        ))}
      </div>

      <p className="max-w-xl text-center mt-6 text-sm italic opacity-70">
        "{slides[active].desc}"
      </p>
    </section>
  );
}

export default Gallery;
