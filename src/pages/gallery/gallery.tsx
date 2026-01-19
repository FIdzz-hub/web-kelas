import { useState, useRef } from "react";
import { slides } from "../../data/galleryData";

type PointerEvent =
  | React.MouseEvent<HTMLDivElement>
  | React.TouchEvent<HTMLDivElement>;

function Gallery() {
  const [active, setActive] = useState(0);
  const startX = useRef(0);
  const total = slides.length;

  const prev = () => setActive((p) => (p - 1 + total) % total);
  const next = () => setActive((p) => (p + 1) % total);

  const handleStart = (e: PointerEvent) => {
    startX.current =
      "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const handleEnd = (e: PointerEvent) => {
    const endX =
      "changedTouches" in e
        ? e.changedTouches[0].clientX
        : e.clientX;

    const distance = startX.current - endX;

    if (distance > 60) next();
    if (distance < -60) prev();
  };

  return (
    <section
      id="gallery"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <p className="text-sm tracking-widest opacity-60 uppercase">
        sistem informasi 49 - 10
      </p>
      <h2 className="text-4xl font-bold mb-12">Gallery</h2>

      {/*GALLERY */}
      <div
        className="
          relative w-full max-w-6xl h-80
          flex items-center justify-center
          overflow-hidden select-none
          cursor-grab active:cursor-grabbing
        "
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
      >
        {slides.map((slide, i) => {
          const offset = i - active;

          return (
            <div
              key={i}
              className={`
                absolute transition-transform duration-500 ease-out will-change-transform *
                ${offset === 0
                  ? "translate-x-0 z-10"
                  : offset < 0
                    ? "-translate-x-115 z-0"
                    : "translate-x-115 z-0"
                }
              `}
            >
              <div
                className={`
                  transition-transform duration-500 ease-out
                  ${offset === 0 ? "scale-100" : "scale-90"}
              `}
              >
                <img
                  src={slide.img}
                  alt="gallery"
                  className="
                    w-115 h-75
                    object-cover rounded-2xl shadow-xl
                    will-change-transform
                  "
                  draggable={false}
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>
      {/*END GALLERY AREA */}

      {/* Pagination */}
      <div className="flex gap-2 mt-6">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setActive(i)}
            className={`
              h-2 rounded-full cursor-pointer transition-all duration-300
              ${i === active
                ? "w-5 bg-blue-900"
                : "w-2 bg-gray-400"}
            `}
          />
        ))}
      </div>

      {/* Caption */}
      {slides[active].desc && (
        <p className="max-w-xl text-center mt-6 text-sm italic opacity-70">
          "{slides[active].desc}"
        </p>
      )}
    </section>
  );
}

export default Gallery;
