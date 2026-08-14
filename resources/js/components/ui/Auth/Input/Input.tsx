import EyeSlashIcon from "@/components/ui/icons/Input/EyeSlashIcon";
import EyeIcon from "@/components/ui/icons/Input/EyeIcon";
import ErrorIcon from "@/components/ui/icons/Input/ErrorIcon";
import { cn } from "@/lib/utils";
import ValidIcon from "@/components/ui/icons/Input/ValidIcon";
import RemoveIcon from "@/components/ui/icons/Input/RemoveIcon";
import { InputProps } from "@/components/ui/Auth/Input/InputType";
import useInput from "@/components/ui/Auth/Input/hooks/useInput";

function Input({
    label,
    name,
    type = "text",
    placeholder,
    onChange,
    error,
    isValid,
    reset,
}: InputProps) {
    const {
        isFilled,
        setIsFilled,
        setShowPassword,
        inputType,
        isPassword,
        showPassword,
    } = useInput(type);

    return (
        <div className="flex flex-col pb-4">
            <label
                className="text-white text-base leading-[150%] font-normal"
                htmlFor={name}
            >
                {label}
            </label>
            <div className="relative">
                <div className="flex items-center">
                    <input
                        className={cn(
                            "w-90 h-9.5 rounded-xs border-[1.5px] border-[#CED4DA] bg-[#CED4DA] text-[#6C757D] py-1.75 px-3.25 focus:outline-none focus:border-[#CED4DA] focus:shadow-[0px_0px_0px_4px_#0D6EFD40]",
                            {
                                "border-main-red": error,
                                "border-[#198754]": isValid,
                            },
                        )}
                        id={name}
                        name={name}
                        type={inputType}
                        placeholder={placeholder}
                        onChange={(e) => {
                            onChange(e);
                            setIsFilled(e.target.value.length > 0);
                        }}
                    />
                </div>
                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-[#6C757D]"
                        tabIndex={-1}
                    >
                        {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
                    </button>
                )}
                {isFilled && (
                    <button
                        type="button"
                        onMouseDown={(e) => e.preventDefault()}
                        className={cn(
                            "absolute cursor-pointer top-1/2 -translate-y-1/2 text-[#6C757D]",
                            {
                                "right-8": isPassword,
                                "right-3": !isPassword,
                            },
                        )}
                        onClick={() => {
                            reset(name);
                            setIsFilled(false);
                        }}
                    >
                        <RemoveIcon />
                    </button>
                )}

                <div className="absolute -right-7 top-1/2 -translate-y-1/2 text-[#6C757D]">
                    {error && <ErrorIcon />}
                    {isValid && <ValidIcon />}
                </div>
            </div>

            <div className="h-2">
                {error && (
                    <span className="text-[#DC3545] text-sm mt-1 block">
                        {error}
                    </span>
                )}
            </div>
        </div>
    );
}

export default Input;
