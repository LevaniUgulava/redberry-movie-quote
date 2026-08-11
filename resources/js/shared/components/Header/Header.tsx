import Buttons from "@/shared/components/Header/components/Buttons/Buttons";
import Lang from "@/shared/components/Header/components/Lang/Lang";

function Header() {
    return (
        <div className="flex px-17.5 pt-6 justify-between bg-[#11101A]">
            <div className="text-main-beige uppercase text-base leading-[150%] font-medium">
                Movie quotes
            </div>
            <div className="flex gap-4">
                <Lang />
                <Buttons />
            </div>
        </div>
    );
}
export default Header;
