// import React from "react";

export default function Gallery() {
  return (
  
    <section
      id="gallery"
      className="scroll-mt-28 min-h-screen bg-black flex flex-col items-center justify-center px-6"
    >
      <div className="relative w-full max-w-4xl">
        
        <div className="absolute -top-4 left-0 w-full h-8 bg-lime-400 rounded-full z-20" />

        <div className="relative bg-white h-105 rounded-3xl shadow-2xl" />

        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-64 h-20 bg-lime-400 rounded-2xl shadow-xl" />
      </div>

      <p className="mt-14 max-w-3xl text-center text-xs text-gray-400 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi fugiat laboriosam officiis ducimus est rerum voluptatem et, natus praesentium ad, optio quos reprehenderit animi velit perspiciatis laudantium itaque, doloribus placeat?
      </p>

    </section>
  );
}
