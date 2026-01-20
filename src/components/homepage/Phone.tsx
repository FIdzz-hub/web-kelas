function HomePhone() {
    return (
        <>
            <div className="w-1/2 flex justify-end gap-6">

                <div className="w-1/2 relative flex justify-center items-center perspective-distant">

                    <div className="absolute w-130 h-130 rounded-full bg-linear-to-br from-lime-400 via-green-500 to-blue-600 blur-[140px] opacity-70" />

                    <div className="absolute w-130 h-130 rounded-full border border-green-400/20" />

                    <div className="absolute -rotate-6 -translate-x-24 z-20">
                        <div className="relative w-64 h-130 rounded-[28px] bg-linear-to-br from-neutral-800 to-neutral-950 border border-neutral-700 shadow-[0_30px_80px_rgba(0,0,0,0.6)] transform-gpu rotateY-[-8deg]"
                        >
                            <div className="absolute inset-1 rounded-3xl bg-linear-to-br from-neutral-900 to-black border border-neutral-800"
                            />
                        </div>
                    </div>

                    <div className="absolute rotate-6 translate-x-20 translate-y-12 z-30">
                        <div className="relative w-64 h-130 rounded-[28px] bg-linear-to-br from-neutral-800 to-neutral-950 border border-neutral-700 shadow-[0_60px_140px_rgba(0,0,0,0.9)] transform-gpu rotateY-[6deg]"
                        >
                            <div className="absolute inset-1 rounded-3xl bg-linear-to-br from-neutral-900 to-black border border-neutral-800"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default HomePhone;