import useTagsInput from "@/pages/Movies/components/MovieForm/components/TagsInput/hooks/useTagsInput.ts";
import {TagsInputProps} from "@/pages/Movies/components/MovieForm/components/InputTypes.ts";


function TagsInput({name, placeholder, value, onChange}: TagsInputProps) {
    const {inputValue, handleKeyDown, setInputValue, removeTag} = useTagsInput(onChange, value);

    return (
        <div className="flex flex-wrap items-center gap-2 border border-[#6C757D] rounded-[4.8px] px-4 py-2.25 focus-within:border-[#5E5CE6] focus-within:ring-2 focus-within:ring-[#5E5CE6]/30">
            {value.map(tag => (
                <span key={tag}
                      className="flex items-center gap-1 bg-[#495057] text-white px-2 py-1 rounded text-sm">
                    {tag}
                    <button type="button" className="cursor-pointer" onClick={() => removeTag(tag)}>×</button>
                </span>
            ))}
            <input
                name={name}
                placeholder={value.length ? "" : placeholder}
                className="flex-1 min-w-20 placeholder:text-white bg-transparent focus:outline-none text-white text-xl leading-[150%]"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            {value.map(tag => (
                <input key={tag} type="hidden" name={`${name}[]`} value={tag}/>
            ))}
        </div>
    );
}

export default TagsInput;
