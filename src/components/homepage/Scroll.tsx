function HomeScroll() {
    return (
        <>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-green-400">
                <div className="w-6 h-10 rounded-full border border-green-400 flex items-start justify-center">
                    <div className="w-1 h-2 bg-green-400 mt-2 rounded-full animate-bounce" />
                </div>
                <span className="text-sm">Scroll down</span>
            </div>
        </>
    )
}

export default HomeScroll;