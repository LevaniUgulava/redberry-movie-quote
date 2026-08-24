import {cn} from "@/lib/utils.ts";
import PhotoIcon from "@/components/ui/icons/Movie/PhotoIcon.tsx";
import useImageInput from "@/pages/Movies/components/MovieForm/components/ImageInput/hooks/useImageInput.ts";
import {ImageInputProps} from "@/pages/Movies/components/MovieForm/components/InputTypes.ts";

function ImageInput({name, onChange,initialPreview}: ImageInputProps) {

    const {handleChange, handleDrop,  setIsDragging, isDragging,preview} = useImageInput(onChange,initialPreview)

    return (
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
            <div className={cn("flex items-center gap-4", preview ? "w-1/2 flex-col" : "w-full")}>
                {preview && (
                    <span className="text-main-beige text-base font-bold uppercase">Replace photo</span>
                )}
                <div className="flex gap-4 items-center">
                    <PhotoIcon/>
                    <span className="text-xl text-white leading-[150%]">Drag & drop your image here or</span>
                </div>
                <label className="cursor-pointer bg-[#5A3FC0] text-white px-4 py-2 rounded-xs font-normal text-lg">
                    Choose file
                    <input type="file" name={name} accept="image/*" onChange={handleChange} className="hidden"/>
                </label>
            </div>
        </div>
    );
}

export default ImageInput;
