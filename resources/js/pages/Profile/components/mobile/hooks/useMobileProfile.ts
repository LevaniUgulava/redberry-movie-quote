import {ChangeEvent, useEffect, useState} from "react";

function useMobileProfile() {
    const [edit, setEdit] = useState("")
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [confirmation, setConfirmation] = useState(false);
    const [open, setOpen] = useState(false);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    const handleEdit = (e: string) => {
        setEdit(e)
    }
    const handleSuccessOpen = () => {
        setOpen(true);
        setConfirmation(false);
        setEdit("");
    }
    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => setOpen(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [open]);

    const handleBack = () => {
        if (confirmation) {
            setConfirmation(false);

            return;
        }

        if (edit) {
            setEdit("");

            return;
        }

        if (open) {
            setOpen(false);

            return;
        }

        window.history.back();
    };

    return {edit, handleEdit, onChange, confirmation, formData, setConfirmation, handleSuccessOpen, open, setOpen, handleBack}
}

export default useMobileProfile;
