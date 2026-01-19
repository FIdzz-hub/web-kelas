import React from "react";

export default function Gallery() {
  return (
  
    <section
      id="gallery"
      className="scroll-mt-28 min-h-screen bg-black flex flex-col items-center justify-center px-6"
    >
      <div className="relative w-full max-w-4xl">
        
        <div className="absolute -top-4 left-0 w-full h-8 bg-lime-400 rounded-full z-20" />

        <div className="relative bg-[#e5e5e5] h-[420px] rounded-3xl shadow-2xl" />

        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-64 h-20 bg-lime-400 rounded-2xl shadow-xl" />
      </div>

      <p className="mt-14 max-w-3xl text-center text-xs text-gray-400 leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised
        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker.
      </p>

    </section>
  );
}
