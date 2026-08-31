import { ChangeEvent } from "react";

export interface InputProps {
    label: string;
    name: string;
    type?: string;
    placeholder: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    isValid?: boolean;
    reset?: (name: string) => void;
    disabled?:boolean,
    value?: string;

}
