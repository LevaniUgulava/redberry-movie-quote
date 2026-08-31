import {usePage} from "@inertiajs/react";
import {PageProps} from "@/types/PagePropsTypes.ts";
import {ChangeEvent, useRef, useState} from "react";

function useQuoteEdit() {
    const {auth, currentModal} = usePage<PageProps>().props

    const imageRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState('');
    const openImageUpload = () => {
        imageRef.current?.click();
    }
    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (preview) {
                URL.revokeObjectURL(preview)
            }
            setImage(file)
            const imageUrl = URL.createObjectURL(file)
            setPreview(imageUrl);
        }
    }
    return {auth, currentModal, handleImageUpload, openImageUpload, preview, imageRef}

}

export default useQuoteEdit;
