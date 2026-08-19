import {ChangeEvent, RefObject} from "react";

export interface AvatarProps {
    fileInputRef: RefObject<HTMLInputElement | null>;
    handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
    preview?: string;
}

export interface InputFieldProps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    defaultValue?: string;
    isEditShow?: boolean;
    form: {
        validate: (name: string) => void;
        errors: Record<string, string>;
        valid: (name: string) => boolean;
        reset: (name: string) => void;
    };
    isOpen: boolean
    handleOpen: (type: string) => void
}
