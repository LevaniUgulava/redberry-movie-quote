import Input from "@/components/ui/Auth/Input/Input.tsx";
import {ProfileFormProps} from "@/pages/Profile/components/mobile/MobileProfileTypes.ts";

function ProfileForm({
                         edit,
                         onChange,
                         formData,
                         handleEdit,
                         setConfirmation
                     }: ProfileFormProps) {

    return <>
        <div className="bg-[#24222F] p-10 flex flex-col gap-10">
            <Input onChange={onChange} value={formData[edit] || ""}
                   label={`Enter New ${edit.charAt(0).toUpperCase() + edit.slice(1)}`} name={edit}
                   placeholder=""/>
            {edit === "password" &&
                <Input onChange={onChange} value={formData[`${edit}_confirmation`] || ""}
                       label={`Enter New Confirm ${edit.charAt(0).toUpperCase() + edit.slice(1)}`}
                       name={`${edit}_confirmation`} placeholder=""/>}
        </div>
        <div className="px-10 py-4 flex justify-between">
            <button onClick={() => handleEdit("")}
                    className='text-white px-4.25 py-2.25 text-[17px] font-normal'>Cancel
            </button>
            <button
                onClick={() => setConfirmation(true)}
                className='rounded-sm text-white px-4.25 py-2.25 text-[17px] font-normal bg-main-red'>Edit
            </button>

        </div>
    </>
}

export default ProfileForm;
