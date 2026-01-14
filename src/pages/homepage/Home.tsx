import bgKelas from "../../assets/images/jelek.jpeg";

function Home() {
    return (
        <>
            <section id="home" className="relative w-full h-screen overflow-hidden">
                <img src={bgKelas} alt="Backgroud Kelas" className="absolute inset-0 w-full h-225 object-cover object-center brightness-75" />

                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10 flex items-end h-full px-10 pb-20">
                    <div className="max-w-xl text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">SISTEM INFORMASI 49 - 10</h1>
                        <p className="text-sm md:text-base leading-relaxed opacity-95">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem sed ad numquam. Excepturi aut distinctio, iure est rerum et aspernatur magni sunt minima quod dicta impedit voluptatibus maiores, saepe dolores.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;