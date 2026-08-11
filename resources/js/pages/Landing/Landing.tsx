import useLanding from "@/pages/Landing/hooks/useLanding";
import HyphenIcon from "@/pages/Landing/icons/HyphenIcon";

//test data
const data = [
    {
        img: "storage/Landing/1.png",
        title: "“You have to leave somethig behind to go forward”",
        desc: "Interstellar, 2014",
    },
    {
        img: "storage/Landing/2.png",
        title: "I think we’re just gonna have to be secretly in love with earch other and leave it that",
        desc: "The Royal Tenenbaums,2001 ",
    },
    {
        img: "storage/Landing/3.png",
        title: "I think we’re just gonna have to be secretly in love with earch other and leave it that",
        desc: "The Royal Tenenbaums,2001 ",
    },
];

function Landing() {
    const scrollY = useLanding();

    return (
        <div className="relative w-full bg-[#11101A]">
            <div className="h-screen gap-4 w-full overflow-hidden  text-white flex flex-col items-center justify-center text-4xl">
                <div className="text-main-beige font-bold text-6xl w-175 flex justify-center items-center mx-auto text-center">
                    Find any quote in millions of movie lines
                </div>
                <button className="w-33.25 cursor-pointer bg-main-red rounded-lg text-xl text-white font-normal px-4.25 py-2.25">
                    Get started
                </button>
            </div>

            {data.map((item, index) => {
                const translateY = scrollY;
                const currentSectionIndex = index + 1;

                const textMoved =
                    translateY - currentSectionIndex * window.innerHeight;

                const opacity = Math.max(0, 1 - textMoved / 800);

                return (
                    <div
                        key={index}
                        className="sticky top-0 h-screen w-full overflow-hidden"
                        style={{ zIndex: index + 1 }}
                    >
                        <img
                            src={item.img}
                            alt={`image ${index}`}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        <div
                            className="absolute inset-x-0 top-90 gap-2 left-32 flex justify-start px-10 z-10"
                            style={{
                                transform: `translateY(-${translateY - currentSectionIndex * window.innerHeight}px)`,
                                opacity: opacity,
                            }}
                        >
                            <div className="mt-8">
                                <HyphenIcon />
                            </div>
                            <div className="flex flex-col w-200 gap-2">
                                <span className="font-bold text-white text-5xl leading-[150%] tracking-[0%]">
                                    {item.title}
                                </span>
                                <span className="text-[#D9D9D9] text-3xl font-bold">
                                    {item.desc}
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Landing;
