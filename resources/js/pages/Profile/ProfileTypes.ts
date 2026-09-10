import {ChangeEvent, RefObject} from "react";
import {PageProps} from "@/types/PagePropsTypes.ts";

export interface ProfileProps {
    auth: PageProps['auth'];
    preview?: string;
    fileInputRef: RefObject<HTMLInputElement | null>;
    handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleOpen: (field: string) => void;
    showField: Record<string, boolean>;
    isAnyFieldOpen: boolean;
    cancelEdit: VoidFunction;
    setPreview: (e: string | undefined) => void
}

export interface AvatarProps {
    fileInputRef: RefObject<HTMLInputElement | null>;
    handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
    preview?: string;
    isVisible:boolean
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
    handleOpen: (type: string) => void,
    value?:string
}
