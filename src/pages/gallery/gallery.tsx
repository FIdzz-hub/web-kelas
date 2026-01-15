import { useState, useRef } from "react";
import { slides } from "../../data/galleryData";

type PointerEvent =
  | React.MouseEvent<HTMLDivElement>
  | React.TouchEvent<HTMLDivElement>;

function Gallery() {
  const [active, setActive] = useState(1);
  const startX = useRef(0);
  const total = slides.length;

  const getPrev = () => (active - 1 + total) % total;
  const getNext = () => (active + 1) % total;

   const handleStart = (e: PointerEvent) => {
    startX.current =
      "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const handleEnd = (e: PointerEvent) => {
    const endX =
      "changedTouches" in e
        ? e.changedTouches[0].clientX
        : e.clientX;

    if (startX.current - endX > 50) setActive(getNext());
    if (endX - startX.current > 50) setActive(getPrev());
  };

  return (
    <section
      id="gallery"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <p className="text-sm tracking-widest text-blue-900 uppercase opacity-60">
        sistem informasi 49 - 10
      </p>
      <h2 className="text-4xl font-bold text-blue-900 mb-12">Gallery</h2>

      <div
        className="flex items-center gap-12 select-none"
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
      >
        {[getPrev(), active, getNext()].map((index, pos) => (
          <div
            key={index}
            className={`
              rounded-xl overflow-hidden transition-all duration-500
              ${pos === 1
                ? "w-175 h-95 opacity-100"
                : "w-64 h-80 opacity-40"
              }`}
          >
            <img
              src={slides[index].img}
              alt="gallery"
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
            aria-label={`Slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`
              w-3 h-3 rounded-full transition
              ${i === active ? "bg-white" : "bg-gray-400"}
              `}
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
