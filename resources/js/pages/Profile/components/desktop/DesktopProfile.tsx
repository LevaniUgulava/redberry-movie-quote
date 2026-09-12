import {Form} from "@inertiajs/react";
import InputField from "@/pages/Profile/components/desktop/components/InputField.tsx";
import {update} from "@/actions/App/Http/Controllers/ProfileController.ts";
import AvatarField from "@/pages/Profile/components/shared/AvatarField.tsx";
import {ProfileProps} from "@/pages/Profile/ProfileTypes.ts";
import {useTranslation} from "react-i18next";
import SuccessToast from "@/pages/Profile/components/mobile/components/SuccessToast.tsx";
import useDesktopProfile from "@/pages/Profile/components/desktop/hooks/useDesktopProfile.ts";

function DesktopProfile({
                            auth,
                            preview,
                            fileInputRef,
                            handleFileChange,
                            handleOpen,
                            showField,
isAnyFieldOpen,
                            cancelEdit,
    setPreview
                        }: ProfileProps) {

    const {t} = useTranslation(["profile", "common"]);
    const {open, setOpen, handleSuccessOpen} = useDesktopProfile();
    const cancelAll = ()=>{
        cancelEdit();
        setPreview(auth.avatar)
    }

    return (
        <>
            <div className="mb-15">
                <span className="text-white text-2xl">{t("my_profile")}</span>
            </div>
            <SuccessToast open={open} setOpen={setOpen}/>
            <Form
                key={`${auth.username}-${auth.email}`}
                action={update()} method="patch"
                onSuccess={() => {
                    handleSuccessOpen();
                    cancelEdit();
                }}>
                {(form) => {
                    const {validate, errors, valid, reset} = form;
                    return (
                        <div className="flex flex-col gap-5 w-full max-w-249.5 max-2xl:max-w-220 max-xl:max-w-180">
                            <div className="relative bg-[#08080D] p-10 flex justify-center rounded-lg py-20">
                                <div className="absolute -top-20 left-1/2 -translate-x-1/2">
                                    <AvatarField fileInputRef={fileInputRef}
                                                 preview={preview}
                                                 handleFileChange={handleFileChange}/>
                                </div>

                                <div className="flex flex-col gap-10 mt-30 w-125 max-2xl:w-110 max-xl:w-92.5">
                                    <InputField
                                        label={t("username")}
                                        name="username"
                                        placeholder={t("enter_new_username")}
                                        value={auth.username}
                                        form={form}
                                        isOpen={showField['username']}
                                        handleOpen={handleOpen}
                                    />
                                    <InputField
                                        label={t("email")}
                                        name="email"
                                        placeholder={t("enter_new_email")}
                                        value={auth.email}
                                        form={form}
                                        isEditShow={!auth.isGoogleAuthenticate}
                                        isOpen={showField['email']}
                                        handleOpen={handleOpen}
                                    />
                                    {!auth.isGoogleAuthenticate && <InputField
                                        label={t("password")}
                                        name="password"
                                        type="password"
                                        value="••••••••••••"
                                        form={form}
                                        isOpen={showField['password']}
                                        handleOpen={handleOpen}
                                    />}
                                </div>
                            </div>
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${
                                    isAnyFieldOpen
                                        ? "grid-rows-[1fr] opacity-100 translate-y-0"
                                        : "grid-rows-[0fr] opacity-0 -translate-y-2"
                                }`}
                            >
                                <div className="min-h-0 overflow-hidden">
                                    <div className="flex gap-2.25 justify-end">
                                        <button type="button" onClick={cancelAll}
                                                className="px-4.25 cursor-pointer py-2.25 text-[#CED4DA] text-xl">
                                            {t("cancel")}
                                        </button>
                                        <button type="submit"
                                                className="px-4.25 py-2.25 cursor-pointer text-[#CED4DA] text-xl bg-main-red hover:bg-[#CC0E10] rounded-sm transition-colors">
                                            {t("save_changes")}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Form>
        </>
    );
}

export default DesktopProfile;
