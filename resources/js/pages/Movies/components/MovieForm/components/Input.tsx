import {InputProps} from "@/pages/Movies/components/MovieForm/components/InputTypes"

function Input({
                   name,
                   placeholder,
                   type = 'text',
                   lang,
                   multiline = false,
                   defaultValue = "",
                   error,
                   disabled = false,
                   prefix,
                   showPrefix=false
               }: InputProps) {
    const commonClassName = "focus:outline-none placeholder:text-white text-white w-full border border-[#6C757D] rounded-[4.8px] text-xl max-lg:text-base leading-[150%] px-4 py-2.25"

    return <div className="relative">
        <div className={`flex border border-[#6C757D] rounded-[4.8px] ${multiline ? 'items-start' : 'items-center'}`}>
            {(prefix && showPrefix )&&
                <span className={`text-[#6C757D] text-xl whitespace-nowrap pl-4 ${multiline ? 'pt-2.25' : ''}`}>
                    {prefix}
                </span>}
            {multiline
                ? <textarea placeholder={placeholder}
                            name={name}
                            rows={2}
                            defaultValue={defaultValue}
                            className={`focus:outline-none placeholder:text-white text-white w-full pr-5 text-xl max-lg:text-base leading-[150%] px-4 py-2.25 bg-transparent border-none`}/>
                : <input placeholder={placeholder}
                         name={name}
                         defaultValue={defaultValue}
                         type={type}
                         disabled={disabled}
                         className={`focus:outline-none placeholder:text-white text-white w-full text-xl max-lg:text-base leading-[150%] px-4 py-2.25 bg-transparent border-none`}/>}
        </div>
        {lang &&
            <div className="absolute top-2.5 right-4">
                <span className="text-[#6C757D] text-xl leading-[150%] font-normal">{lang}</span>
            </div>}
        {error && <div className="text-[#DC3545] mt-1 block text-xl">
            {error}
        </div>}
    </div>
}

export default Input;
