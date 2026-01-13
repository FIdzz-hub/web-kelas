import { useEffect, useRef, useState } from "react";

function About() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-[#1f1f3a] text-white flex flex-col items-center justify-center px-10"
    >
<div
  className={`relative mb-10 transition-all duration-700
  ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
>
  <div className="absolute inset-0 flex justify-center items-center gap-2 z-0">
    {[1, 2, 3, 4].map((_, i) => (
      <span
        key={i}
        className="w-[15px] h-14 border-2 border-red-500 rotate-[20deg]"
      />
    ))}
  </div>

  <h2 className="relative z-10 text-2xl md:text-3xl font-bold text-white text-center
  drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]
  drop-shadow-[0_0_20px_rgba(255,0,0,0.6)]">
    ABOUT US
  </h2>
</div>

      <p
        className={`max-w-2xl text-center font-Times new roman mb-10 transition-all duration-700 delay-200
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      </p>

      <div className="flex center gap-40 mb-20">
  {[
    { number: "45", label: "MURID" },
    { number: "45", label: "LAKI-LAKI" },
    { number: "45", label: "PEREMPUAN" },
  ].map((item, i) => (
    <div
      key={i}
      className="text-center transition-all duration-700 italic"
      style={{
        transitionDelay: `${i * 200}ms`,
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(20px)",
      }}
    >
     
      <div className="text-4xl font-bold">
        {item.number}
      </div>

      
      <div className="text-sm tracking-widest opacity-80">
        {item.label}
      </div>
    </div>
  ))}
</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-10">
  {[
    "CAPTAIN",
    "WAKIL CAPTAIN",
    "KETUA KELAS",
  ].map((role, i) => (
    <div
      key={i}
      className="flex flex-col items-center transition-all duration-700"
      style={{
        transitionDelay: `${i * 200}ms`,
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(40px)",
      }}
    >
     
     <div
  className="
  w-64 h-64 bg-gray-300 rounded-2xl mb-4
  transition-all duration-500 ease-out
  hover:scale-110 hover:-translate-y-4
  hover:shadow-2xl
  cursor-pointer "
/>


      <p
        className="
        text-sm tracking-widest uppercase font-bold text-black-300 italic
        "
      >
        {role}
      </p>
    </div>
  ))}
</div>
    </section>
  );
}

export default About;
