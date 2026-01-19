import { leaders, stats } from "../../data/aboutData";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out",
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <section
            className="min-h-screen flex flex-col items-center justify-center px-10"
        >
            {/* Title */}
            <div className="relative mb-16 mt-18" data-aos="fade-up">
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

            {/* Description */}
            <p 
            data-aos="fade-up"
            data-aos-delay="150"
            className="max-w-2xl text-center mb-14" 
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-32 mb-20">
                {stats.map((item, i) => (
                    <div 
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 150} 
                    className="text-center italic"
                    >
                        <div className="text-4xl font-bold">{item.number}</div>
                        <div className="text-sm tracking-widest opacity-80">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>

            {/* Leaders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {leaders.map((item, i) => (
                    <div 
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 150}
                    className="flex flex-col items-center"
                    >
                        <div className="w-64 h-64 overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src={item.img}
                                alt={item.role}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <p className="mt-4 text-sm tracking-widest uppercase font-bold italic opacity-90">
                            {item.role}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default About;
