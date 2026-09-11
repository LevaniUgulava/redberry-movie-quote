import RegisterForm from "@/pages/Auth/Register/RegisterForm";
import LoginForm from "@/pages/Auth/Login/LoginForm";
import useAuthContent from "@/pages/Auth/AuthContent/hooks/useAuthContent.ts";
import ResetForm from "@/pages/Auth/Reset/ResetForm.tsx";
import ForgetForm from "@/pages/Auth/Forget/ForgetForm.tsx";
import Message from "@/pages/Auth/Message/Message.tsx";
import CloseIcon from "@/components/ui/icons/CloseIcon.tsx";
import AuthModalWrapper from "@/components/wrapper/AuthModalWrapper/AuthModalWrapper.tsx";

function AuthContent({currentModal}: { currentModal: string }) {
    const {currentConfig, handleClose, isOpen} = useAuthContent(currentModal);
    const isConfig=Boolean(currentConfig)
    return (
        <AuthModalWrapper
            className={isConfig ? "w-[80%]" : "max-lg:max-w-none! max-lg:rounded-none max-lg:min-h-screen"}
            isOpen={isOpen}
            onClose={handleClose}
            isConfig={isConfig}
        >
            <div className="relative p-10 max-lg:p-5 flex justify-center">

                <CloseIcon onClick={handleClose} className="absolute right-5 cursor-pointer lg:hidden"/>

                {currentConfig && <Message {...currentConfig}/>}

                {currentModal === "register" && <RegisterForm/>}
                {currentModal === "login" && <LoginForm/>}
                {currentModal === "forget" && <ForgetForm/>}
                {currentModal === "reset" && <ResetForm/>}

            </div>
        </AuthModalWrapper>
    );
}

export default AuthContent;
