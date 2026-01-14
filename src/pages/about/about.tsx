import { useEffect, useRef, useState } from "react";
import { leaders, stats } from "../../data/aboutData";



function About() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="about"
        className="min-h-screen 
        flex flex-col items-center justify-center px-10"
      >
        <div
          className={`relative mb-16 mt-18 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
        >

          <div className="absolute inset-0 flex justify-center items-center gap-3 -z-10">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="w-3 h-16 border border-red-500 opacity-90 rotate-12"
              />
            ))}
          </div>

          <h2 className="text-3xl font-extrabold text-center tracking-wide">
            ABOUT US
          </h2>
        </div>

        <p
          className={`max-w-2xl text-center mb-14 transition-all duration-700 delay-200 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex justify-center gap-32 mb-20">
          {stats.map((item, i) => (
            <div
              key={i}
              className="text-center italic transition-all duration-700"
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="text-4xl font-bold">{item.number}</div>
              <div className="text-sm tracking-widest opacity-80">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {leaders.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-center transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="w-64 h-64 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={item.img}
                  alt={item.role}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <p className="mt-4 text-sm tracking-widest uppercase font-bold italic opacity-90">
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
