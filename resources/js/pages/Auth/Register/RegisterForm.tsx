import {register} from "@/actions/App/Http/Controllers/AuthController";
import Buttons from "@/components/ui/Auth/Buttons/Buttons";
import Header from "@/components/ui/Auth/Header/Header";
import Input from "@/components/ui/Auth/Input/Input";
import {Form} from "@inertiajs/react";
import AuthFooterLink from "@/pages/Auth/AuthFooterLink/AuthFooterLink";
import {useTranslation} from "react-i18next";

function RegisterForm() {
    const {t} = useTranslation('auth');
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <Header title={t('register_title')} subtitle={t('register_subtitle')}/>

            <Form className="w-full" action={register()}>
                {({validate, errors, valid, reset}) => (
                    <div>
                        <Input
                            name="username"
                            label={t("name")}
                            placeholder={t("name_placeholder")}
                            onChange={() => validate("username")}
                            error={errors.username}
                            isValid={valid("username")}
                            reset={reset}
                        />
                        <Input
                            name="email"
                            label={t("email")}
                            placeholder={t("email_placeholder")}
                            onChange={() => validate("email")}
                            error={errors.email}
                            isValid={valid("email")}
                            reset={reset}
                        />
                        <Input
                            name="password"
                            label={t("password")}
                            type="password"
                            placeholder={t("register_password_placeholder")}
                            onChange={() => validate("password")}
                            error={errors.password}
                            isValid={valid("password")}
                            reset={reset}
                        />
                        <Input
                            name="password_confirmation"
                            label={t("confirm_password")}
                            type="password"
                            placeholder={t("confirm_password_placeholder")}
                            onChange={() => validate("password_confirmation")}
                            error={errors.password_confirmation}
                            isValid={valid("password_confirmation")}
                            reset={reset}
                        />
                        <Buttons/>
                    </div>
                )}
            </Form>
            <AuthFooterLink
                linkName={t("login_link")}
                text={t("already_have_account")}
                link="login"
            />
        </div>
    );
}

export default RegisterForm;
