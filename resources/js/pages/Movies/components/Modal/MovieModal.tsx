
import MovieForm from "@/pages/Movies/components/MovieForm/MovieForm.tsx";
import CloseIcon from "@/components/ui/icons/CloseIcon.tsx";
import ModalWrapper from "@/components/wrapper/ModalWrapper/ModalWrapper.tsx";
import {useTranslation} from "react-i18next";

interface ModalWrapperProps {
    isOpen: boolean;
    onClose: VoidFunction;
    editingMovie: any
    isEditOpen: boolean
}

function MovieModal({isOpen, onClose, editingMovie, isEditOpen}: ModalWrapperProps) {
    const {t} = useTranslation("movies");
    return <ModalWrapper isOpen={isOpen} onClose={onClose}>
        <div className="relative shrink-0 flex items-center justify-center border-b border-[#EFEFEF]/20 py-8 max-lg:py-2">
                <span className="text-white text-2xl font-medium leading-[150%]">
                    {isEditOpen ? t("modal_edit_title") : t("modal_add_title")}
                </span>
            <CloseIcon onClick={onClose} className="absolute right-5 cursor-pointer"/>
        </div>
        <MovieForm key={isEditOpen ? editingMovie.id : 'new'} isEditOpen={isEditOpen} editingMovie={editingMovie}/>
    </ModalWrapper>

}

export default MovieModal;
