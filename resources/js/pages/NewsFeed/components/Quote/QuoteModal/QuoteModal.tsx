import ModalWrapper from "@/components/wrapper/ModalWrapper/ModalWrapper.tsx";
import CloseIcon from "@/components/ui/icons/CloseIcon.tsx";
import QuoteForm from "@/pages/NewsFeed/components/Quote/QuoteForm/QuoteForm.tsx";
import {PageProps} from "@/types/PagePropsTypes.ts";
import {usePage} from "@inertiajs/react";

function QuoteModal({isOpen, handleClose}: { isOpen: boolean, handleClose: VoidFunction }) {

    return <ModalWrapper isOpen={isOpen} onClose={handleClose}>
        <div className="relative flex items-center justify-center border-b border-[#EFEFEF]/20 py-8">
                <span className="text-white text-2xl font-medium leading-[150%]">
                     Write New Quote
                </span>
            <CloseIcon onClick={handleClose} className="absolute right-5 cursor-pointer"/>
        </div>
        <QuoteForm/>

    </ModalWrapper>
}

export default QuoteModal;
