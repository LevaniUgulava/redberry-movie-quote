import { login } from "@/actions/App/Http/Controllers/AuthController";
import Buttons from "@/components/ui/Auth/Buttons/Buttons";
import Header from "@/components/ui/Auth/Header/Header";
import Input from "@/components/ui/Auth/Input/Input";
import { Form, Link } from "@inertiajs/react";
import AuthFooterLink from "@/pages/Auth/AuthFooterLink/AuthFooterLink";
import BackIcon from "@/components/ui/icons/BackIcon";

function ForgetForm() {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <Header
                title="Forgot password?"
                subtitle="Enter the email and we’ll send an email with instructions to reset your password"
            />
            <Form>
                {({ validate, errors, valid, reset }) => (
                    <div>
                        <Input
                            name="email"
                            label="Email"
                            placeholder="Enter your email or username"
                            onChange={() => validate("login")}
                            error={errors.email}
                            isValid={valid("email")}
                            reset={reset}
                        />
                        <Buttons showGoogle={false} label="Send instructions" />
                    </div>
                )}
            </Form>
            <div className="flex gap-2 items-center mt-4 cursor-pointer">
                <BackIcon />
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
export default ForgetForm;
