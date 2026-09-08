import Buttons from "@/components/ui/Auth/Buttons/Buttons";
import Header from "@/components/ui/Auth/Header/Header";
import Input from "@/components/ui/Auth/Input/Input";
import { Form } from "@inertiajs/react";
import LocaleLink from "@/components/LocaleLink";
import BackIcon from "@/components/ui/icons/BackIcon";
import { useTranslation } from "react-i18next";
import { forgetPassword } from "@/actions/App/Http/Controllers/PasswordResetController.ts";

function ForgetForm() {
    const { t } = useTranslation("auth");

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <Header
                title={t("forgot_title")}
                subtitle={t("forgot_subtitle")}
            />
            <Form className="w-full" action={forgetPassword()}>
                {({ validate, errors, valid, reset }) => (
                    <div className="flex flex-col gap-2">
                        <Input
                            name="email"
                            label={t("email")}
                            placeholder={t("email_placeholder")}
                            onChange={() => validate("email")}
                            error={errors.email}
                            isValid={valid("email")}
                            reset={reset}
                        />
                        <Buttons showGoogle={false} label={t("send_instructions")} />
                    </div>
                )}
            </Form>
            <div className="flex gap-2 items-center mt-4 cursor-pointer">
                <BackIcon />
                <LocaleLink
                    href="/?modal=login"
                    className="text-gray-600 text-base leading-[150%]"
                >
                    {t("back_to_login")}
                </LocaleLink>
            </div>
        </div>
    );
}

export default ForgetForm;
