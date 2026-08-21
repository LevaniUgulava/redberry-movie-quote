import Header from "@/components/ui/Auth/Header/Header.tsx";
import {Form, Link, usePage} from "@inertiajs/react";
import Input from "@/components/ui/Auth/Input/Input.tsx";
import Buttons from "@/components/ui/Auth/Buttons/Buttons.tsx";
import BackIcon from "@/components/ui/icons/BackIcon.tsx";
import {resetPassword} from "@/actions/App/Http/Controllers/PasswordResetController.ts";

function ResetForm() {
    const {url} = usePage();
    const params = new URLSearchParams(url.split('?')[1]);
    const email = params.get('email');
    const token = params.get('token');
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <Header
                title="Create new password"
                subtitle="Your new password must be different from previous used passwords"
            />
            <Form className="w-full" action={resetPassword()}
                  transform={(data) => ({
                      ...data, email, token
                  })}>
                {({validate, errors, valid, reset}) => (
                    <div>
                        <Input
                            name="password"
                            label="Password"
                            placeholder="At least 8 & max.15 lower case characters"
                            onChange={() => validate("password")}
                            error={errors.password}
                            isValid={valid("password")}
                            reset={reset}
                            type="password"

                        />
                        <Input
                            name="password_confirmation"
                            label="Confirm password"
                            placeholder="Confirm password"
                            type="password"
                            onChange={() => validate("password_confirmation")}
                            error={errors.password_confirmation}
                            isValid={valid("password_confirmation")}
                            reset={reset}
                        />
                        <Buttons showGoogle={false} label="Reset password"/>
                    </div>
                )}
            </Form>
            <div className="flex gap-2 items-center mt-4 cursor-pointer">
                <BackIcon/>
                <Link
                    href="/?modal=login"
                    className=" text-gray-600 text-base leading-[150%]"
                >
                    Back to log in
                </Link>
            </div>
        </div>
    );
}

export default ResetForm;
