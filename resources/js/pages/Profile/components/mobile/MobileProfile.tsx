import {ProfileProps} from "@/pages/Profile/ProfileTypes.ts";
import BackIcon from "@/components/ui/icons/BackIcon.tsx";
import useMobileProfile from "@/pages/Profile/components/mobile/hooks/useMobileProfile.ts";
import SuccessToast from "@/pages/Profile/components/mobile/components/SuccessToast.tsx";
import ConfirmationModal from "@/pages/Profile/components/mobile/components/ConfirmationModal.tsx";
import ProfileForm from "@/pages/Profile/components/mobile/components/ProfileForm.tsx";
import ProfileView from "@/pages/Profile/components/mobile/components/ProfileView.tsx";

function MobileProfile(_props: ProfileProps) {
    const {
        edit,
        handleEdit,
        onChange,
        confirmation,
        formData,
        setConfirmation,
        handleSuccessOpen,
        open,
        setOpen
    } = useMobileProfile();


    return (
        <div>
            <div className='p-5'>
                <BackIcon className="max-lg:w-4 max-lg:h-4"/>
            </div>
            {!edit &&
                <ProfileView fileInputRef={_props.fileInputRef}
                             preview={_props.preview}
                             setPreview={_props.setPreview}
                             handleEdit={handleEdit}
                             auth={_props.auth} handleFileChange={_props.handleFileChange}
                             handleOpen={_props.handleOpen}/>
            }

            <SuccessToast open={open} setOpen={setOpen}/>

            {(edit && !confirmation) &&
                <ProfileForm
                    edit={edit}
                    onChange={onChange}
                    formData={formData}
                    handleEdit={handleEdit}
                    setConfirmation={setConfirmation}
                />

            }
            {confirmation &&
                <ConfirmationModal setConfirmation={setConfirmation} formData={formData}
                                   handleSuccessOpen={handleSuccessOpen}/>
            }


        </div>
    )
        ;
}

export default MobileProfile;
