import {ChangeEvent, DragEvent, useState} from "react";

function useImageInput(onChange?: (file: File | null) => void,initialPreview: string | null = null) {
    const [preview, setPreview] = useState<string | null>(initialPreview);
    const [isDragging, setIsDragging] = useState(false);

    const handleFile = (file: File | null) => {
        onChange?.(file);
        setPreview(file ? URL.createObjectURL(file) : null);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        handleFile(e.dataTransfer.files?.[0] ?? null);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleFile(e.target.files?.[0] ?? null);
    };
    return {preview, isDragging, handleFile, handleChange, handleDrop, setIsDragging}
}

export default useImageInput;
