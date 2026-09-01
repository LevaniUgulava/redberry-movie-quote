import ModalWrapper from "@/components/wrapper/ModalWrapper/ModalWrapper.tsx";
import CloseIcon from "@/components/ui/icons/CloseIcon.tsx";
import QuoteForm from "@/pages/NewsFeed/components/Quote/QuoteForm/QuoteForm.tsx";
import {QuoteModalProps} from "@/pages/NewsFeed/components/Quote/QuoteModal/QuoteModalTypes.ts";
import QuoteEdit from "../Quote/QuoteEdit.tsx";
import EditIcon from "@/components/ui/icons/Movie/EditIcon.tsx";
import DeleteIcon from "@/components/ui/icons/Movie/DeleteIcon.tsx";
import LocaleLink from "@/components/LocaleLink.tsx";
import useQuoteModal from "@/pages/NewsFeed/components/Quote/QuoteModal/hooks/useQuoteModal.ts";
import {useTranslation} from "react-i18next";

function QuoteModal({isOpen, handleClose, modal, quote, movie_id}: QuoteModalProps) {
    const {url, isExistQuote, isEdit, isView, handleDelete} = useQuoteModal(modal, quote, movie_id);
    const {t} = useTranslation(["newsfeed", "common"]);
    return (
        <ModalWrapper isOpen={isOpen} onClose={handleClose}>
            <div className='flex flex-col gap-5'>
                <div className="relative flex items-center justify-center max-lg:h-23 border-b border-[#EFEFEF]/20 py-8 max-lg:py-2">
                    {isExistQuote && <div className="absolute left-5 cursor-pointer">
                        <div className="flex items-center justify-between gap-3 w-22.5">
                            {isView &&
                                <>
                                    <LocaleLink href={url('edit')} className="cursor-pointer">
                                        <EditIcon/>
                                    </LocaleLink>
                                    <div className="w-px h-5 bg-[#6C757D]"/>
                                </>}
                            <button onClick={handleDelete} className="cursor-pointer flex items-center gap-2">
                                <DeleteIcon/> {isEdit && <span className='text-base text-white font-normal'>{t("delete")}</span>}
                            </button>
                        </div>
                    </div>}
                    <span className="text-white text-2xl max-lg:text-xl font-medium leading-[150%]">
                        {modal === "create" && t("modal_create_title")}
                        {modal === "view" && t("modal_view_title")}
                        {modal === "edit" && t("modal_edit_title")}
                    </span>
                    <CloseIcon onClick={handleClose} className="absolute right-5 cursor-pointer"/>
                </div>
                {modal === "create" && <QuoteForm handleClose={handleClose}/>}
                {isExistQuote && <QuoteEdit quote={quote}/>}
            </div>
        </ModalWrapper>
    );
}

export default QuoteModal;