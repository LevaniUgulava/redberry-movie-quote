import CheckIcon from "@/components/ui/icons/Message/CheckIcon.tsx";
import SuccesIcon from "@/components/ui/icons/Message/SuccesIcon.tsx";
import InvalidTokenIcon from "@/components/ui/icons/Message/InvalidTokenIcon.tsx";
import {AlertCircle} from "lucide-react";
import {router} from "@inertiajs/react";

export const getMessageConfig = (locale: string) => ({
    VERIFY_SENT: {
        icon: <CheckIcon/>,
        title: "thank_you",
        subtitle: "verify_sent_subtitle",
        button: "go_to_email",
        onClick: () => window.open("https://mail.google.com/mail/u/0/#inbox", "_blank"),
    },
    VERIFIED: {
        icon: <SuccesIcon/>,
        title: "thank_you",
        subtitle: "verified_subtitle",
        button: "login_link",
        onClick: () => router.visit(`/${locale}?modal=login`),
    },
    RESET_SUCCESS: {
        icon: <SuccesIcon/>,
        title: "success_title",
        subtitle: "password_changed_subtitle",
        button: "login_link",
        onClick: () => router.visit(`/${locale}?modal=login`),
    },
    INVALID_TOKEN: {
        icon: <InvalidTokenIcon/>,
        title: "link_expired_title",
        subtitle: "link_expired_subtitle",
        button: "request_another_link",
    },
    CHECK: {
        icon: <CheckIcon/>,
        title: "check_email_title",
        subtitle: "check_email_subtitle",
        button: "go_to_email",
        onClick: () => window.open("https://mail.google.com/mail/u/0/#inbox", "_blank"),
        skip: true
    },
    EMAIL_CHANGED: {
        icon: <SuccesIcon/>,
        title: "success_title",
        subtitle: "email_changed_subtitle",
        button: "go_to_feed",
        onClick: () => router.visit(`/${locale}/newsfeed`),
    },
    EMAIL_THROTTLE: {
        icon: <AlertCircle className="size-18 text-main-red"/>,
        title: "throttle_title",
        subtitle: "email_throttle_subtitle",
        button: "close",
        onClick: () => router.get(`/${locale}`, {}, {preserveScroll: true, preserveState: true}),
    },
    ERROR: {
        icon: <AlertCircle className="size-18 text-main-red"/>,
        title: "error_title",
        subtitle: "error_subtitle",
        button: "close",
        onClick: () => router.get(`/${locale}`, {}, {preserveScroll: true, preserveState: true}),
    },
});
