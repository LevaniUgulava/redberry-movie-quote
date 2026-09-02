import {router} from "@inertiajs/react";
import {update} from "@/actions/App/Http/Controllers/ProfileController.ts";
import {ConfirmationModalProps} from "@/pages/Profile/components/mobile/MobileProfileTypes.ts";

function ConfirmationModal({setConfirmation, formData, handleSuccessOpen}: ConfirmationModalProps) {
    return <div className='w-full flex justify-center'>
        <div className="bg-[#24222F] flex flex-col justify-center w-[90%] rounded-[10px]">
            <div className='flex justify-center  p-10'>
                <span className="text-white text-base">Are you sure to make changes?</span>

            </div>
            <div className="border-t border-[#CED4DA33]"></div>
            <div className="px-10 py-4 flex justify-between  p-10">
                <button onClick={() => setConfirmation(false)}
                        className="text-white px-4.25 py-2.25 text-[17px] font-normal">Cancel
                </button>
                <button
                    onClick={() => router.patch(update().url, formData, {
                        onSuccess: handleSuccessOpen
                    })}
                    className="rounded-sm text-white px-4.25 py-2.25 text-[17px] font-normal bg-main-red">
                    Confirm
                </button>
            </div>
        </div>
    </div>
}

export default ConfirmationModal;
