function HomeText() {

    function click() {
        const toGallery = document.getElementById("gallery");
        toGallery?.scrollIntoView()
    }

    return (
        <>
            <div className="w-1/2">
                <h1 className="text-6xl font-bold leading-tight mb-6">
                    SISTEM INFORMASI <br /> 49–10
                </h1>

                <p className="text-black-400 text-lg max-w-md mb-10">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                    amet sint. Velit officia consequat duis enim velit mollit.
                </p>

                <div className="flex gap-4">
                    <button className="px-6 py-2 rounded-full border border-white bg-white hover:bg-black text-black hover:text-white transition text-xl font-bold cursor-pointer">
                        About Us
                    </button>
                    <button onClick={click} className="px-6 py-2 rounded-full border border-white hover:bg-white text-white hover:text-black transition text-xl font-bold cursor-pointer">
                        Gallery
                    </button>
                </div>
            </div>
        </>
    )
}

export default HomeText;