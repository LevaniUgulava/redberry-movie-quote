import {AvatarProps} from "@/pages/Profile/ProfileTypes.ts";

function AvatarField({fileInputRef, handleFileChange, preview}: AvatarProps) {
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
