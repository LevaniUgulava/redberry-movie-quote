import {ChangeEvent, RefObject} from "react";
import {AvatarProps} from "@/pages/Profile/ProfileTypes.ts";

function AvatarField({fileInputRef, handleFileChange, preview}: AvatarProps) {
    return (
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex flex-col items-center">
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
                className="h-47 w-47 rounded-full object-cover"
                src={preview}
            />

            <span
                className="text-white mt-2 cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
            >
                Upload new photo
            </span>
        </div>
    );
}

export default AvatarField;
