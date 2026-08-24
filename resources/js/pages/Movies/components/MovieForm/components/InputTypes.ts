export interface InputProps {
    name: string,
    placeholder: string,
    type?: string,
    lang?: string | null,
    multiline?: boolean
    defaultValue?:string
}

export interface ImageInputProps {
    name: string;
    onChange?: (file: File | null) => void;
    initialPreview?: string | null;
}

export interface TagsInputProps {
    name: string;
    placeholder?: string;
    value: string[];
    onChange: (tags: string[]) => void;
}
