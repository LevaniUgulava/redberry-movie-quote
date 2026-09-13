import {AvatarProps} from "@/pages/Profile/ProfileTypes.ts";
import {useTranslation} from "react-i18next";

function AvatarField({fileInputRef, handleFileChange, preview}: AvatarProps) {
    const {t} = useTranslation("profile");
    return (
        <div className="flex flex-col items-center">
            <input
                ref={fileInputRef}
                type="file"
                name="avatar"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
            />

            <img
                alt="profile image"
                className="h-47 w-47 max-2xl:h-42 max-2xl:w-42 max-xl:h-36 max-xl:w-36 rounded-full object-cover"
                src={preview}
            />

            <div
                className="grid transition-all duration-300 ease-in-out"
            >
                <div className="min-h-0 overflow-hidden">
                    <span
                        className="block text-white mt-2 cursor-pointer whitespace-nowrap"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        {t("upload_new_photo")}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AvatarField;
