import AvatarField from "@/pages/Profile/components/shared/AvatarField.tsx";
import InputField from "@/pages/Profile/components/mobile/components/InputField.tsx";
import {ProfileViewProps} from "@/pages/Profile/components/mobile/MobileProfileTypes.ts";
import {Form} from "@inertiajs/react";
import {update} from "@/actions/App/Http/Controllers/ProfileController.ts";
import {useTranslation} from "react-i18next";

function ProfileView({fileInputRef, preview, setPreview, handleEdit, auth,handleFileChange}: ProfileViewProps) {

    const {t} = useTranslation(["profile", "common"]);

    const handleCancel = () => {
        setPreview(auth?.avatar);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    return (
        <div className="bg-[#24222F] p-10 flex flex-col gap-10">
            <div className="flex flex-col justify-center">
                <Form action={update()} method='post'>
                    <AvatarField fileInputRef={fileInputRef} preview={preview}
                                 handleFileChange={handleFileChange}/>

                {preview !== auth?.avatar && <div className="px-10 py-4 flex gap-3 justify-center">
                    <button type="button" onClick={handleCancel}
                            className='text-white text-xs px-2.25 py-2.25 font-normal'>{t("cancel")}
                    </button>
                    <button type="submit"
                            className='rounded-sm text-white px-2.25 py-2.25 text-xs font-normal bg-main-red'>{t("upload")}
                    </button>
                </div>}
                </Form>

            </div>
            <div className='flex flex-col gap-7.75 py-5'>
                <InputField label={t("username")} value='username' defaultValue={auth.username}
                            handleEdit={handleEdit}/>
                <InputField label={t("email")} value='email' defaultValue={auth.email}
                            isEditable={!auth.isGoogleAuthenticate} handleEdit={handleEdit}/>
                <InputField label={t("password")} value='password' defaultValue="••••••••••••"
                            handleEdit={handleEdit}/>
            </div>
        </div>
    );
}

export default ProfileView;
