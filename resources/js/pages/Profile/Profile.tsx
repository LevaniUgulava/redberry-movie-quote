import useProfile from "@/pages/Profile/hooks/useProfile.ts";
import DesktopProfile from "@/pages/Profile/components/desktop/DesktopProfile.tsx";
import MobileProfile from "@/pages/Profile/components/mobile/MobileProfile.tsx";
import Message from "@/pages/Auth/Message/Message.tsx";
import useAuthContent from "@/pages/Auth/AuthContent/hooks/useAuthContent.ts";
import useIsMobile from "@/hooks/useIsMobile.ts";
import AuthModalWrapper from "@/components/wrapper/AuthModalWrapper/AuthModalWrapper.tsx";

function Profile() {

    const {
        auth, preview, setPreview, fileInputRef, handleFileChange, handleOpen, showField, isAnyFieldOpen, cancelEdit
    } = useProfile();

    const {currentConfig, handleClose, isOpen} = useAuthContent("");

    const isMobile = useIsMobile();


    const mobileProps = {
        auth,
        setPreview,
        preview,
        fileInputRef,
        handleFileChange,
        handleOpen,
        showField,
        isAnyFieldOpen,
        cancelEdit
    };


    return (
        <div className="flex w-full flex-col pl-45 max-2xl:pl-30 max-xl:pl-18 max-lg:pl-0 gap-10">
            {isMobile ? (
                <MobileProfile {...mobileProps} />
            ) : (
                <DesktopProfile {...mobileProps} />
            )}
            <AuthModalWrapper isOpen={isOpen} onClose={handleClose} isConfig={true}>
                {currentConfig && <Message {...currentConfig}/>}
            </AuthModalWrapper>
        </div>
    );
}

export default Profile;
