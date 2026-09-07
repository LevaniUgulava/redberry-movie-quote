export interface InputProps {
    name: string,
    placeholder: string,
    type?: string,
    lang?: string | null,
    multiline?: boolean
    defaultValue?: string
    error?: string | null,
    disabled?: boolean,
    prefix?: string;
    pl?: string,
    showPrefix?: boolean
}

export interface ImageInputProps {
    name: string;
    onChange?: (file: File | null) => void;
    initialPreview?: string | null;
    error?: string | null

}

export interface TagsInputProps {
    name: string;
    placeholder?: string;
    value: string[];
    onChange: (tags: string[]) => void;
}
