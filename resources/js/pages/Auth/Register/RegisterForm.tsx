import { register } from "@/actions/App/Http/Controllers/AuthController";
import Buttons from "@/components/ui/Auth/Buttons/Buttons";
import Header from "@/components/ui/Auth/Header/Header";
import Input from "@/components/ui/Auth/Input/Input";
import { Form } from "@inertiajs/react";
import AuthFooterLink from "@/pages/Auth/AuthFooterLink/AuthFooterLink";

function RegisterForm() {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <Header title="Create an account" subtitle="Start your journey!" />

            <Form action={register()}>
                {({ validate, errors, valid, reset }) => (
                    <div>
                        <Input
                            name="username"
                            label="Name"
                            placeholder="At least 3 & max.15 lower case characters"
                            onChange={() => validate("username")}
                            error={errors.username}
                            isValid={valid("username")}
                            reset={reset}
                        />
                        <Input
                            name="email"
                            label="Email"
                            placeholder="Enter your email"
                            onChange={() => validate("email")}
                            error={errors.email}
                            isValid={valid("email")}
                            reset={reset}
                        />
                        <Input
                            name="password"
                            label="Password"
                            type="password"
                            placeholder="At least 8 & max.15 lower case characters"
                            onChange={() => validate("password")}
                            error={errors.password}
                            isValid={valid("password")}
                            reset={reset}
                        />
                        <Input
                            name="password_confirmation"
                            label="Confirm password"
                            type="password"
                            placeholder="Confirm password"
                            onChange={() => validate("password_confirmation")}
                            error={errors.password_confirmation}
                            isValid={valid("password_confirmation")}
                            reset={reset}
                        />
                        <Buttons />
                    </div>
                )}
            </Form>
            <AuthFooterLink
                linkName="Log in"
                text="Already have an account?"
                link="login"
            />
        </div>
    );
}
export default RegisterForm;
