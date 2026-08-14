import { useState } from "react";

function useInput(type: string) {
    const [showPassword, setShowPassword] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;
    return {
        isFilled,
        setIsFilled,
        setShowPassword,
        inputType,
        isPassword,
        showPassword,
    };
}
export default useInput;
