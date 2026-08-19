import {Form} from "@inertiajs/react";
import InputField from "@/pages/Profile/components/InputField.tsx";
import {update} from "@/actions/App/Http/Controllers/ProfileController.ts";
import useProfile from "@/pages/Profile/hooks/useProfile.ts";
import AvatarField from "@/pages/Profile/components/AvatarField.tsx";

function Profile() {

    const {
        auth, preview, fileInputRef, handleFileChange, handleOpen, showField, isAnyFieldOpen, cancelEdit
    } = useProfile();


    return (
        <div className="flex w-full flex-col pl-50 gap-10">
            <div className="mb-15">
                <span className="text-white text-2xl">My profile</span>
            </div>
            <Form
                key={`${auth.username}-${auth.email}`}
                action={update()} method="patch"
                onSuccess={() => {
                    cancelEdit();
                }}>
                {(form) => {
                    const {validate, errors, valid, reset} = form;
                    return (
                        <div className="flex flex-col gap-5 w-249.5">
                            <div className="relative bg-[#08080D] p-10 flex justify-center rounded-lg py-20">
                                <AvatarField fileInputRef={fileInputRef} preview={preview}
                                             handleFileChange={handleFileChange}/>

                                <div className="flex flex-col gap-10 mt-30 w-125">
                                    <InputField
                                        label="username"
                                        name="username"
                                        placeholder="Enter new username"
                                        defaultValue={auth.username}
                                        form={form}
                                        isOpen={showField['username']}
                                        handleOpen={handleOpen}
                                    />
                                    <InputField
                                        label="email"
                                        name="email"
                                        placeholder="Enter new email"
                                        defaultValue={auth.email}
                                        form={form}
                                        isEditShow={!auth.isGoogleAuthenticate}
                                        isOpen={showField['email']}
                                        handleOpen={handleOpen}


                                    />
                                    <InputField
                                        label="password"
                                        name="password"
                                        type="password"
                                        defaultValue="••••••••••••"
                                        form={form}
                                        isOpen={showField['password']}
                                        handleOpen={handleOpen}
                                    />
                                </div>
                            </div>
                            {isAnyFieldOpen &&
                                <div className="flex gap-2.25 justify-end">
                                    <button type="button" onClick={cancelEdit}
                                            className="px-4.25 cursor-pointer py-2.25 text-[#CED4DA] text-xl">
                                        Cancel
                                    </button>
                                    <button type="submit"
                                            className="px-4.25 py-2.25 cursor-pointer text-[#CED4DA] text-xl bg-main-red rounded-sm">
                                        Save changes
                                    </button>
                                </div>}
                        </div>
                    );
                }}
            </Form>
        </div>
    );
}

export default Profile;
