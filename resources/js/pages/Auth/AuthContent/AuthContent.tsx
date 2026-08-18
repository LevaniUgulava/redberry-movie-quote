import ModalWrapper from "@/components/wrapper/ModalWrapper";
import RegisterForm from "@/pages/Auth/Register/RegisterForm";
import LoginForm from "@/pages/Auth/Login/LoginForm";
import ForgetForm from "../Forget/ForgetForm";
import Message from "../Message/Message";
import CheckIcon from "@/components/ui/icons/Message/CheckIcon";
import SuccesIcon from "@/components/ui/icons/Message/SuccesIcon";
import useAuthContent from "@/pages/Auth/AuthContent/hooks/useAuthContent.ts";
import { useTranslation } from "react-i18next";

function AuthContent({currentModal}: { currentModal: string }) {
    const {type, handleClose, isOpen} = useAuthContent(currentModal);
    const { t } = useTranslation("auth");

    return (
        <ModalWrapper isOpen={isOpen} onClose={handleClose}>
            <div className="p-10">
                {type === "VERIFY_SENT" && (
                    <Message
                        icon={<CheckIcon/>}
                        title={t("thank_you")}
                        subtitle={t("verify_sent_subtitle")}
                        button={t("go_to_email")}
                        onClick={() =>
                            window.open(
                                "https://mail.google.com/mail/u/0/#inbox",
                                "_blank",
                            )
                        }
                    />
                )}
                {type === "VERIFIED" && (
                    <Message
                        icon={<SuccesIcon/>}
                        title={t("thank_you")}
                        subtitle={t("verified_subtitle")}
                        button={t("go_to_feed")}
                    />
                )}

                {currentModal === "register" && <RegisterForm/>}
                {currentModal === "login" && <LoginForm/>}
                {currentModal === "forget" && <ForgetForm/>}
            </div>
        </ModalWrapper>
    );
}

export default AuthContent;
