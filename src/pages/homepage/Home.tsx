function Home() {
    return (
        <>
            <section id="home" className="relative min-h-screen flex items-center px-10">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-linear-to-br from-lime-400 via-green-500 to-blue-600 blur-3xl opacity-70" />

                <div className="relative z-10 max-w-xl">
                    <p className="text-xs text-gray-400 mb-4">HITAM HITAM HITAM</p>

                    <h1 className="text-5xl font-bold leading-tight mb-6">
                        SISTEM INFORMASI <br /> 49–10
                    </h1>

                    <p className="text-gray-400 text-sm mb-8">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                        amet sint. Velit officia consequat duis enim velit mollit.
                    </p>

                    <div className="flex gap-4">
                        <button className="px-6 py-2 rounded-full bg-white text-black text-sm font-medium">
                            About Us
                        </button>
                        <button className="px-6 py-2 rounded-full border border-white text-sm">
                            Gallery
                        </button>
                    </div>
                </div>

                <div className="relative z-10 ml-auto flex gap-6">
                    <div className="w-52 h-96 bg-neutral-900 rounded-xl border border-neutral-700" />
                    <div className="w-52 h-96 bg-neutral-900 rounded-xl border border-neutral-700 mt-10" />
                </div>
            </section>
        </>
    )
}

export default Home;