import Input from "@/components/ui/Auth/Input/Input.tsx";
import {ProfileFormProps} from "@/pages/Profile/components/mobile/MobileProfileTypes.ts";
import {Form} from "@inertiajs/react";
import {update} from "@/actions/App/Http/Controllers/ProfileController.ts";
import {useTranslation} from "react-i18next";

function ProfileForm({
                         edit,
                         onChange,
                         formData,
                         handleEdit,
                         setConfirmation
                     }: ProfileFormProps) {
    const {t} = useTranslation(["profile", "common"]);

    return <Form action={update()} method="patch">
        {({validate, errors, valid, reset}) => (
            <>
                <div onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                     className="bg-[#24222F] p-10 flex flex-col gap-10">
                    {edit === "password" &&
                        <Input
                            onChange={(e) => {
                                onChange(e);
                                validate("current_password");
                            }}
                            defaultValue={formData.current_password || ""}
                            label={t("current_password")} name="current_password" type="password"
                            placeholder={t("enter_current_password")}
                            error={errors.current_password}
                            isValid={valid("current_password")}
                            reset={reset}/>}
                    <Input
                        onChange={(e) => {
                            onChange(e);
                            validate(edit);
                        }}
                        defaultValue={formData[edit] || ""}
                        label={t("enter_new_field", {field: t(edit)})} name={edit}
                        type={edit === "password" ? "password" : "text"}
                        placeholder={t("enter_new_field", {field: t(edit)})}
                        error={errors[edit]}
                        isValid={valid(edit)}
                        reset={reset}/>
                    {edit === "password" &&
                        <Input
                            onChange={(e) => {
                                onChange(e);
                                validate(`${edit}_confirmation`);
                            }}
                            defaultValue={formData[`${edit}_confirmation`] || ""}
                            label={t("confirm_new_field_again", {field: t(edit)})}
                            name={`${edit}_confirmation`} type="password"
                            placeholder={t("confirm_new_field_again", {field: t(edit)})}
                            error={errors[`${edit}_confirmation`]}
                            isValid={valid(`${edit}_confirmation`)}
                            reset={reset}/>}
                </div>
                <div className="px-10 py-4 flex justify-between">
                    <button onClick={() => handleEdit("")}
                            className='text-white px-4.25 py-2.25 text-[17px] font-normal cursor-pointer'>{t("cancel")}
                    </button>
                    <button
                        onClick={() => setConfirmation(true)}
                        className='rounded-sm text-white px-4.25 py-2.25 text-[17px] font-normal bg-main-red hover:bg-[#CC0E10] cursor-pointer transition-colors'>{t("edit")}
                    </button>

                </div>
            </>
        )}
    </Form>
}

export default ProfileForm;
