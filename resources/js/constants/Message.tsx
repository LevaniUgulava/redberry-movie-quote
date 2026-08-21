import CheckIcon from "@/components/ui/icons/Message/CheckIcon.tsx";
import SuccesIcon from "@/components/ui/icons/Message/SuccesIcon.tsx";
import InvalidTokenIcon from "@/components/ui/icons/Message/InvalidTokenIcon.tsx";
import {router} from "@inertiajs/react";

export const getMessageConfig = (locale: string) => ({
    VERIFY_SENT: {
        icon: <CheckIcon/>,
        title: "Thank you!",
        subtitle: "Please check your email and follow the instructions to activate your account.",
        button: "Go to my email",
        onClick: () => window.open("https://mail.google.com/mail/u/0/#inbox", "_blank"),
    },
    VERIFIED: {
        icon: <SuccesIcon/>,
        title: "Thank you!",
        subtitle: "Your account has been activated.",
        button: "Go to my news feed",
        onClick: () => router.visit(`/${locale}/newsfeed`),
    },
    RESET_SUCCESS: {
        icon: <SuccesIcon/>,
        title: "Success!",
        subtitle: "Your Password changed successfully",
        button: "Log in",
        onClick: () => router.visit(`/${locale}?modal=signup`),
    },
    INVALID_TOKEN: {
        icon: <InvalidTokenIcon/>,
        title: "Link expired!",
        subtitle: "Login link has expired, because you haven’t used it",
        button: "Request another link",
    },
    CHECK: {
        icon: <CheckIcon/>,
        title: "Check your email",
        subtitle: "We have sent a password recover instructions to your email",
        button: "Go to my email",
        onClick: () => window.open("https://mail.google.com/mail/u/0/#inbox", "_blank"),
        skip: true
    },
    EMAIL_CHANGED: {
        icon: <SuccesIcon/>,
        title: "Success!",
        subtitle: "Your Email changed successfully",
        button: "Go to my news feed",
        onClick: () => router.visit(`/${locale}/newsfeed`),
    }
});
