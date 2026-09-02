

import {InputFieldProps} from "@/pages/Profile/components/mobile/MobileProfileTypes.ts";
import {useTranslation} from "react-i18next";

function InputField({label,value,defaultValue,isEditable=true,handleEdit}:InputFieldProps) {
    const {t} = useTranslation("common");
    return <div className='border-b border-[#CED4DA]/50'>
        <label className="text-white text-base font-normal">{label}</label>
        <div className="relative mb-2">
            <input defaultValue={defaultValue} disabled={true} className="text-white text-lg focus:outline-none w-full pr-16"/>
            {isEditable && <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <button onClick={()=>handleEdit(value)} className="text-[#CED4DA]">{t("edit")}</button>
            </div>}
        </div>
    </div>
}

export default InputField;
