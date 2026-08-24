import {KeyboardEvent, useState} from "react";

function useTagsInput(onChange: (tags: string[]) => void, value: string[]
) {
    const [inputValue, setInputValue] = useState("");

    const addTag = (tag: string) => {
        const trimmed = tag.trim();
        if (trimmed && !value.includes(trimmed)) {
            onChange([...value, trimmed]);
        }
        setInputValue("");
    };

    const removeTag = (tag: string) => {
        onChange(value.filter(t => t !== tag));
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            addTag(inputValue);
        } else if (e.key === "Backspace" && !inputValue && value.length) {
            removeTag(value[value.length - 1]);
        }
    };
    return {inputValue, handleKeyDown, setInputValue, removeTag}
}

export default useTagsInput;
