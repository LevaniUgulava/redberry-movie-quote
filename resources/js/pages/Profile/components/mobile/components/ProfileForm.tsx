import Input from "@/components/ui/Auth/Input/Input.tsx";
import {ProfileFormProps} from "@/pages/Profile/components/mobile/MobileProfileTypes.ts";
import {useTranslation} from "react-i18next";

function ProfileForm({
                         edit,
                         onChange,
                         formData,
                         handleEdit,
                         setConfirmation
                     }: ProfileFormProps) {
    const {t} = useTranslation(["profile", "common"]);

    return <>
        <div className="bg-[#24222F] p-10 flex flex-col gap-10">
            <Input onChange={onChange} value={formData[edit] || ""}
                   label={t("enter_new_field", {field: t(edit)})} name={edit}
                   placeholder=""/>
            {edit === "password" &&
                <Input onChange={onChange} value={formData[`${edit}_confirmation`] || ""}
                       label={t("confirm_new_field_again", {field: t(edit)})}
                       name={`${edit}_confirmation`} placeholder=""/>}
        </div>
        <div className="px-10 py-4 flex justify-between">
            <button onClick={() => handleEdit("")}
                    className='text-white px-4.25 py-2.25 text-[17px] font-normal'>{t("cancel")}
            </button>
            <button
                onClick={() => setConfirmation(true)}
                className='rounded-sm text-white px-4.25 py-2.25 text-[17px] font-normal bg-main-red'>{t("edit")}
            </button>

        </div>
    </>
}

export default ProfileForm;
