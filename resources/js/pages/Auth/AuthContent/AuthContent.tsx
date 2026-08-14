import ModalWrapper from "@/components/wrapper/ModalWrapper";
import { router } from "@inertiajs/react";
import RegisterForm from "@/pages/Auth/Register/RegisterForm";
import LoginForm from "@/pages/Auth/Login/LoginForm";
import ForgetForm from "../Forget/ForgetForm";

function AuthContent({ currentModal }: { currentModal: string }) {
    const handleClose = () => {
        router.get(
            "/",
            {},
            {
                preserveScroll: true,
                preserveState: true,
            },
        );
    };
    const isOpen = ["register", "login", "forget", "message"].includes(
        currentModal,
    );
    return (
        <ModalWrapper isOpen={Boolean(isOpen)} onClose={handleClose}>
            <div className="p-10">
                {currentModal === "register" && <RegisterForm />}
                {currentModal === "login" && <LoginForm />}
                {currentModal === "forget" && <ForgetForm />}
            </div>
        </ModalWrapper>
    );
}
export default AuthContent;
