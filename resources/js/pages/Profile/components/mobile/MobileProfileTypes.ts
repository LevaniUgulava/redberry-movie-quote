import {ChangeEvent, RefObject} from "react";
import {PageProps} from "@/types/PagePropsTypes.ts";

export interface ProfileViewProps {
    fileInputRef: RefObject<HTMLInputElement | null>;
    preview: string | undefined;
    setPreview: (e: string | undefined) => void;
    handleEdit: (field: string) => void;
    auth: PageProps['auth'];
    handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleOpen: (field: string) => void;
}

export interface InputFieldProps {
    label: string;
    value: string;
    type?: string;
    defaultValue?: string;
    isEditable?: boolean;
    handleEdit: (e: string) => void;
}

export interface ConfirmationModalProps {
    setConfirmation: (value: boolean) => void;
    formData: Record<string, string>;
    handleSuccessOpen: () => void;
}

export interface SuccessToastProps {
    open: boolean;
    setOpen: (e: boolean) => void;
}

export interface ProfileFormProps {
    edit: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    formData: Record<string, string>;
    handleEdit: (field: string) => void;
    setConfirmation: (value: boolean) => void;
}
