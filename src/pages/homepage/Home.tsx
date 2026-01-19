function Home() {
    return (
        <>
            <section
                id="home"
                className="relative h-screen bg-black overflow-hidden p-30"
            >
                <div className="absolute right-32 top-1/2 -translate-y-1/2 w-130 h-130 rounded-full bg-linear-to-br from-lime-400 via-green-500 to-blue-600 blur-3xl opacity-70" />

                <div className="relative z-10 max-w-360 mx-auto px-12 flex items-center mt-10">
                    <div className="w-1/2">
                        <h1 className="text-5xl font-bold leading-tight mb-6">
                            SISTEM INFORMASI <br /> 49–10
                        </h1>

                        <p className="text-black-400 text-sm max-w-md mb-10">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint. Velit officia consequat duis enim velit mollit.
                        </p>

                        <div className="flex gap-4">
                            <button className="px-6 py-2 rounded-full border border-white bg-white hover:bg-black text-black hover:text-white transition text-lg font-bold cursor-pointer">
                                About Us
                            </button>
                            <button className="px-6 py-2 rounded-full border border-white hover:bg-white text-white hover:text-black transition text-lg font-bold cursor-pointer">
                                Gallery
                            </button>
                        </div>
                    </div>

                    <div className="w-1/2 flex justify-end gap-6">

                        <div className="w-56 h-105 bg-neutral-900 rounded-2xl border border-neutral-700" />
                        <div className="w-56 h-105 bg-neutral-900 rounded-2xl border border-neutral-700 mt-14" />
                        
                    </div>

                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-green-400">
                <div className="w-6 h-10 rounded-full border border-green-400 flex items-start justify-center">
                 <div className="w-1 h-2 bg-green-400 mt-2 rounded-full animate-bounce" />
                </div>
                    <span className="text-sm">Scroll down</span>
                </div>
            </section>
        </>
    )
}

export default Home;