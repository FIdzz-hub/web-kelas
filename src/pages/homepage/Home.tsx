import HomePhone from "../../components/homepage/Phone";
import HomeScroll from "../../components/homepage/Scroll";
import HomeText from "../../components/homepage/Text";

function Home() {
    return (
        <>
            <section
                id="home"
                className="relative h-screen bg-black overflow-hidden pt-50"
            >
                <div className="relative z-10 max-w-360 mx-auto px-12 flex items-center mt-20">
                    <HomeText />
                    <HomePhone />
                </div>
                <HomeScroll />




            </section>
        </>
    )
}

export default Home;