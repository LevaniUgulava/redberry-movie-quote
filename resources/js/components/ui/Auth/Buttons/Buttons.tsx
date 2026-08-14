import GoogleIcon from "@/components/ui/icons/Google/GoogleIcon";

function Buttons({
    showGoogle = true,
    label = "Get started",
}: {
    showGoogle?: boolean;
    label?: string;
}) {
    return (
        <div className="flex flex-col gap-4">
            <button
                type="submit"
                className="text-white font-normal text-base leading-[150%] bg-main-red hover:bg-[#CC0E10] cursor-pointer rounded-xs px-3.25 py-1.75 w-full"
            >
                {label}
            </button>
            {showGoogle && (
                <button
                    type="button"
                    className="border cursor-pointer flex justify-center items-center gap-2 border-[#CED4DA] text-white font-normal text-base leading-[150%] rounded-xs px-3.25 py-1.75 w-full"
                >
                    <GoogleIcon />
                    <span>Sign in with Google</span>
                </button>
            )}
        </div>
    );
}
export default Buttons;
