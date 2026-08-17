import { resend } from "@/routes/verify";
import { router, usePage } from "@inertiajs/react";
import { useState } from "react";

function useInput(type: string) {
    const [showPassword, setShowPassword] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;
    const { flash } = usePage();

    const handleResend = () => {
        router.post(resend(), {
            email: flash?.unverified_email as string,
        });
    };
    return {
        isFilled,
        setIsFilled,
        setShowPassword,
        inputType,
        isPassword,
        showPassword,
        isVerified: Boolean(flash.unverified_email),
        handleResend,
    };
}
export default useInput;
