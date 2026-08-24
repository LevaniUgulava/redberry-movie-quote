import {InputProps} from "@/pages/Movies/components/MovieForm/components/InputTypes"

function Input({name, placeholder, type = 'text', lang, multiline = false,defaultValue =""}: InputProps) {
    const commonClassName = "focus:outline-none placeholder:text-white text-white w-full border border-[#6C757D] rounded-[4.8px] text-xl leading-[150%] px-4 py-2.25"

    return <div className="relative">
        {multiline
            ? <textarea placeholder={placeholder}
                        name={name}
                        rows={2}
                        defaultValue={defaultValue}
                        className={commonClassName}/>
            : <input placeholder={placeholder}
                     name={name}
                     defaultValue={defaultValue}
                     type={type}
                     className={commonClassName}/>}
        {lang &&
            <div className="absolute top-2.5 right-4">
                <span className="text-[#6C757D] text-xl leading-[150%] font-normal">{lang}</span>
            </div>}
    </div>
}

export default Input;
