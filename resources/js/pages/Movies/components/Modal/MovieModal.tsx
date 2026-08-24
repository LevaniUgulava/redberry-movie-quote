import {Dialog, DialogContent, DialogOverlay} from "@/components/ui/dialog.tsx";
import {Form} from "@inertiajs/react";
import MovieForm from "@/pages/Movies/components/MovieForm/MovieForm.tsx";
import {ReactNode} from "react";
import CloseIcon from "@/components/ui/icons/CloseIcon.tsx";

interface ModalWrapperProps {
    isOpen: boolean;
    onClose: VoidFunction;
    editingMovie: any
    isEditOpen: boolean
}

function MovieModal({isOpen, onClose, editingMovie, isEditOpen}: ModalWrapperProps) {
    return <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent
            overlayClassName="bg-black/40! backdrop-blur-[2px]!"
            showCloseButton={false}
            className="w-full max-w-240.25! top-24!  translate-y-0! p-0 bg-[linear-gradient(187.16deg,#181623_0.07%,#191725_51.65%,#0D0B14_98.75%)]!">

            <div className="relative flex items-center justify-center border-b border-[#EFEFEF]/20 py-8">
                <span className="text-white text-2xl font-medium leading-[150%]">
                    {isEditOpen ? "Edit" : "Add"} Movie
                </span>
                <CloseIcon onClick={onClose} className="absolute right-5 cursor-pointer"/>
            </div>
            <MovieForm isEditOpen={isEditOpen} editingMovie={editingMovie}/>
        </DialogContent>
    </Dialog>
}

export default MovieModal;
