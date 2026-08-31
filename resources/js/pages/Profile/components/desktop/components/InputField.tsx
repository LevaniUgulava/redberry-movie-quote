import Input from "@/components/ui/Auth/Input/Input.tsx";
import {useState} from "react";
import {cn} from "@/lib/utils.ts";
import {InputFieldProps} from "@/pages/Profile/ProfileTypes.ts";


function InputField({
                        label,
                        name,
                        type = "text",
                        placeholder = "",
                        isEditShow = true,
                        form,
                        isOpen,
                        handleOpen
                    }: InputFieldProps) {
    const {validate, errors, valid, reset} = form;
    const isPassword = type === "password";
    const confirmationName = `${name}_confirmation`;

    return (
        <div className="w-125 max-2xl:w-110 max-xl:w-92.5 flex flex-col gap-10">
            <div className="flex gap-3.5">
                <div className="w-full">
                    <Input
                        name={name}
                        label={label}
                        placeholder={placeholder}
                        disabled
                    />
                </div>
                <button
                    type="button"
                    onClick={() => handleOpen(name)}
                    className={cn(
                        "text-white h-9.5 mt-6 w-15 shrink-0 flex items-center px-4.25 py-2.25",
                        isEditShow ? "cursor-pointer" : "invisible"
                    )}
                >
                    Edit
                </button>
            </div>

            {isOpen && isPassword && (
                <div className="flex gap-3.5">
                    <div className="w-full">
                        <div className="border border-[#CED4DA]/20 gap-4 flex flex-col p-6 rounded-sm">
                            <span className="text-white text-base leading-[150%] font-normal">
                                Passwords should contain:
                            </span>
                            <ul className="list-disc pl-5 text-[#6C757D]">
                                <li className="text-[#9C9A9A] text-sm leading-5.5 font-normal">
                                    8 or more characters
                                </li>
                                <li className="text-white text-sm leading-5.5 font-normal">
                                    1 lowercase character
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-15 shrink-0"/>
                </div>
            )}

            {isOpen && (
                <div className="flex flex-col gap-10">
                    <div className="flex gap-3.5">
                        <div className="w-full">
                            <Input
                                name={name}
                                label={`New ${name}`}
                                placeholder={placeholder}
                                type={type}
                                onChange={() => validate(name)}
                                error={errors[name]}
                                isValid={valid(name)}
                                reset={reset}
                            />
                        </div>
                        <div className="w-15 shrink-0"/>
                    </div>

                    {isPassword && (
                        <div className="flex gap-3.5">
                            <div className="w-full">
                                <Input
                                    name={confirmationName}
                                    label={`Confirm new ${name}`}
                                    placeholder={placeholder}
                                    type={type}
                                    onChange={() => validate(confirmationName)}
                                    error={errors[confirmationName]}
                                    isValid={valid(confirmationName)}
                                    reset={reset}
                                />
                            </div>
                            <div className="w-15 shrink-0"/>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default InputField;
