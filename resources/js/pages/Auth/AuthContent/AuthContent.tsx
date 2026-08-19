import ModalWrapper from "@/components/wrapper/ModalWrapper";
import RegisterForm from "@/pages/Auth/Register/RegisterForm";
import LoginForm from "@/pages/Auth/Login/LoginForm";
import useAuthContent from "@/pages/Auth/AuthContent/hooks/useAuthContent.ts";
import ResetForm from "@/pages/Auth/Reset/ResetForm.tsx";
import ForgetForm from "@/pages/Auth/Forget/ForgetForm.tsx";
import Message from "@/pages/Auth/Message/Message.tsx";

function AuthContent({currentModal}: { currentModal: string }) {
    const {currentConfig, handleClose, isOpen} = useAuthContent(currentModal);
    return (
        <ModalWrapper isOpen={isOpen} onClose={handleClose}>
            <div className="p-10">

                {currentConfig && <Message {...currentConfig}/>}

                {currentModal === "register" && <RegisterForm/>}
                {currentModal === "login" && <LoginForm/>}
                {currentModal === "forget" && <ForgetForm/>}
                {currentModal === "reset" && <ResetForm/>}

            </div>
        </ModalWrapper>
    );
}

export default AuthContent;
