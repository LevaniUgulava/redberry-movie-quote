import {cn} from "@/lib/utils.ts";
import PhotoIcon from "@/components/ui/icons/Movie/PhotoIcon.tsx";
import useImageInput from "@/pages/Movies/components/MovieForm/components/ImageInput/hooks/useImageInput.ts";
import {ImageInputProps} from "@/pages/Movies/components/MovieForm/components/InputTypes.ts";
import {useTranslation} from "react-i18next";

function ImageInput({name, onChange, initialPreview, error}: ImageInputProps) {

    const {t} = useTranslation("movies");
    const {handleChange, handleDrop, setIsDragging, isDragging, preview} = useImageInput(onChange, initialPreview)

    return (
        <div>

            <div
                onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={cn("flex items-center gap-6 border rounded-[4.8px] px-4 py-6 transition-colors border-[#6C757D]", {
                    "border-main-red": isDragging
                })}
            >
                {preview && (
                    <div className="w-1/2">
                        <img src={preview} alt="preview" className="w-full h-fit rounded object-cover"/>
                    </div>
                )}
                <div className={cn("flex items-center max-lg:justify-between gap-4", preview ? "w-1/2 flex-col" : "w-full")}>
                    {preview && (
                        <span className="text-main-beige text-base font-bold uppercase">{t("replace_photo")}</span>
                    )}
                    <div className="flex gap-4 items-center">
                        <PhotoIcon/>
                        <span className="max-lg:hidden text-xl text-white leading-[150%]">{t("drag_drop_image")}</span>
                        <span className="lg:hidden text-base text-white leading-[150%]">{t("upload_image")}</span>
                    </div>
                    <label className="cursor-pointer bg-[#5A3FC0] text-white px-4 py-2 rounded-xs font-normal text-lg max-lg:text-base">
                        {t("choose_file")}
                        <input type="file" name={name} accept="image/*" onChange={handleChange} className="hidden"/>
                    </label>
                </div>

            </div>
            {error && <div className="text-[#DC3545] h-2  mt-1 block text-xl">
                {error}
            </div>}
        </div>

    );
}

export default ImageInput;
