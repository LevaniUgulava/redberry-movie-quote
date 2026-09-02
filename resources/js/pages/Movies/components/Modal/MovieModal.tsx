
import MovieForm from "@/pages/Movies/components/MovieForm/MovieForm.tsx";
import CloseIcon from "@/components/ui/icons/CloseIcon.tsx";
import ModalWrapper from "@/components/wrapper/ModalWrapper/ModalWrapper.tsx";

interface ModalWrapperProps {
    isOpen: boolean;
    onClose: VoidFunction;
    editingMovie: any
    isEditOpen: boolean
}

function MovieModal({isOpen, onClose, editingMovie, isEditOpen}: ModalWrapperProps) {
    return <ModalWrapper isOpen={isOpen} onClose={onClose}>
        <div className="relative flex items-center justify-center border-b border-[#EFEFEF]/20 py-8 max-lg:py-2">
                <span className="text-white text-2xl font-medium leading-[150%]">
                    {isEditOpen ? "Edit" : "Add"} Movie
                </span>
            <CloseIcon onClick={onClose} className="absolute right-5 cursor-pointer"/>
        </div>
        <MovieForm isEditOpen={isEditOpen} editingMovie={editingMovie}/>
    </ModalWrapper>

}

export default MovieModal;
