import { login } from "@/actions/App/Http/Controllers/AuthController";
import Buttons from "@/components/ui/Auth/Buttons/Buttons";
import Header from "@/components/ui/Auth/Header/Header";
import Input from "@/components/ui/Auth/Input/Input";
import { Form } from "@inertiajs/react";
import LocaleLink from "@/components/LocaleLink";
import AuthFooterLink from "@/pages/Auth/AuthFooterLink/AuthFooterLink";
import { useTranslation } from "react-i18next";

function LoginForm() {
    const { t } = useTranslation("auth");
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <Header
                title={t("login_title")}
                subtitle={t("login_subtitle")}
            />
            <Form action={login()}>
                {({ validate, errors, valid, reset }) => (
                    <div>
                        <Input
                            name="login"
                            label={t("email")}
                            placeholder={t("email_placeholder")}
                            onChange={() => validate("login")}
                            error={errors.login}
                            isValid={valid("login")}
                            reset={reset}
                        />
                        <Input
                            name="password"
                            label={t("password")}
                            type="password"
                            placeholder={t("password_placeholder")}
                            onChange={() => validate("password")}
                            error={errors.password}
                            isValid={valid("password")}
                            reset={reset}
                        />
                        <div className="flex justify-between pb-4">
                            <div className="flex items-center gap-2">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    name="remember"
                                    className="w-4 h-4 accent-main-red cursor-pointer"
                                />
                                <label
                                    htmlFor="remember"
                                    className="text-white text-sm cursor-pointer"
                                >
                                    {t("remember_me")}
                                </label>
                            </div>
                            <div>
                                <LocaleLink
                                    href="/?modal=forget"
                                    className="text-[#0D6EFD] underline"
                                >
                                    {t("forgot_password")}
                                </LocaleLink>
                            </div>
                        </div>
                        <Buttons />
                    </div>
                )}
            </Form>
            <AuthFooterLink
                linkName={t("sign_up_link")}
                text={t("dont_have_account")}
                link="register"
            />
        </div>
    );
}
export default LoginForm;
