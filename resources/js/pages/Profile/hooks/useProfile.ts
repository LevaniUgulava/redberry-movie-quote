import {usePage} from "@inertiajs/react";
import {PageProps} from "@/types/PagePropsTypes.ts";
import {useEffect, useRef, useState} from "react";

function useProfile() {
    const {auth} = usePage<PageProps>().props;

    const [preview, setPreview] = useState<string | undefined>(auth?.avatar);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setPreview(auth?.avatar);
    }, [auth?.avatar]);
    const [showField, setShowField] = useState({
        username: false,
        email: false,
        password: false
    });
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const blobUrl = URL.createObjectURL(file);
            setPreview(blobUrl);
        }
    };

    const handleOpen = (field: string) => {
        setShowField((prev) => ({
            ...prev,
            [field]: !prev[field as keyof typeof prev]
        }));
    };
    const isAnyFieldOpen =
        showField['email'] ||
        showField['password'] ||
        showField['username'] ||
        preview !== auth?.avatar;

    const cancelEdit = () => {
        setShowField((prev) =>
            Object.fromEntries(
                Object.keys(prev).map((key) => [key, false])
            ) as typeof prev
        );
        setPreview(auth?.avatar)
    }

    return {
        auth, preview, fileInputRef, handleFileChange, isAnyFieldOpen, handleOpen, showField, cancelEdit,setPreview
    }

}

export default useProfile;
