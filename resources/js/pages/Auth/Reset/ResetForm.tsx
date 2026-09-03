import Header from "@/components/ui/Auth/Header/Header.tsx";
import {Form, Link, usePage} from "@inertiajs/react";
import Input from "@/components/ui/Auth/Input/Input.tsx";
import Buttons from "@/components/ui/Auth/Buttons/Buttons.tsx";
import BackIcon from "@/components/ui/icons/BackIcon.tsx";
import {resetPassword} from "@/actions/App/Http/Controllers/PasswordResetController.ts";
import {useTranslation} from "react-i18next";

function ResetForm() {
    const {url} = usePage();
    const {t} = useTranslation("auth");
    const params = new URLSearchParams(url.split('?')[1]);
    const email = params.get('email');
    const token = params.get('token');
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <Header
                title={t("reset_title")}
                subtitle={t("reset_subtitle")}
            />
            <Form className="w-full" action={resetPassword()}
                  transform={(data) => ({
                      ...data, email, token
                  })}>
                {({validate, errors, valid, reset}) => (
                    <div>
                        <Input
                            name="password"
                            label={t("password")}
                            placeholder={t("register_password_placeholder")}
                            onChange={() => validate("password")}
                            error={errors.password}
                            isValid={valid("password")}
                            reset={reset}
                            type="password"

                        />
                        <Input
                            name="password_confirmation"
                            label={t("confirm_password")}
                            placeholder={t("confirm_password_placeholder")}
                            type="password"
                            onChange={() => validate("password_confirmation")}
                            error={errors.password_confirmation}
                            isValid={valid("password_confirmation")}
                            reset={reset}
                        />
                        <Buttons showGoogle={false} label={t("reset_button")}/>
                    </div>
                )}
            </Form>
            <div className="flex gap-2 items-center mt-4 cursor-pointer">
                <BackIcon/>
                <Link
                    href="/?modal=login"
                    className=" text-gray-600 text-base leading-[150%]"
                >
                    {t("back_to_login")}
                </Link>
            </div>
        </div>
    );
}

export default ResetForm;
