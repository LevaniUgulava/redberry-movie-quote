import useLanding from "@/pages/Landing/hooks/useLanding";
import HyphenIcon from "@/pages/Landing/icons/HyphenIcon";
import AuthContent from "@/pages/Auth/AuthContent/AuthContent";
import {LandingQuote} from "@/pages/Landing/LandingTypes.ts";
import {useTranslation} from "react-i18next";
import {Head, Link} from "@inertiajs/react";
import LocaleLink from "@/components/LocaleLink.tsx";

function Landing({currentModal}: { currentModal: string }) {
    const {scrollY, quotes} = useLanding();
    const {t} = useTranslation(["landing", "common"]);
    return (
        <div className="relative w-full bg-[#11101A]">
            <Head title={t('title')}/>

            <div
                className="h-screen gap-4 w-full overflow-hidden  text-white flex flex-col items-center justify-center text-4xl">
                <div className="text-main-beige font-bold text-6xl max-lg:text-2xl
                 max-w-175 max-lg:max-w-70.25 w-full flex justify-center items-center mx-auto text-center">
                    {t("find_any_quote")}
                </div>
                <LocaleLink
                    href="/?modal=register"
                    className="cursor-pointer bg-main-red hover:bg-[#CC0E10] rounded-lg text-xl max-lg:text-base text-white font-normal px-4.25 py-2.25 transition-colors">
                    {t("get_started")}
                </LocaleLink>
            </div>
            {quotes.map((item: LandingQuote, index: number) => {
                const translateY = scrollY;
                const currentSectionIndex = index + 1;
                const textMoved =
                    translateY - currentSectionIndex * window.innerHeight;
                const opacity = Math.max(0, 1 - textMoved / 800);
                return (
                    <div
                        key={index}
                        className="sticky top-0 h-screen w-full overflow-hidden"
                        style={{zIndex: index + 1}}
                    >
                        <img
                            src={item.image}
                            alt={`image ${index}`}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div
                            className="absolute inset-x-0 top-90 gap-2 left-32 flex justify-start px-10 z-10 max-lg:left-0 max-lg:px-2"
                            style={{
                                transform: `translateY(-${translateY - currentSectionIndex * window.innerHeight}px)`,
                                opacity: opacity,
                            }}
                        >
                            <div className="mt-8 max-lg:mt-3">
                                <HyphenIcon/>
                            </div>
                            <div className="flex flex-col w-200 gap-2">
                                <span
                                    className="font-bold text-white text-5xl max-lg:text-xl leading-[150%] tracking-[0%]">
                                    {item.quote}
                                </span>
                                <span className="text-[#D9D9D9] text-3xl max-lg:text-base font-bold">
                                    {item.movie},{item.year}
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div>
                <AuthContent currentModal={currentModal}/>
            </div>
        </div>
    );
}

export default Landing;
