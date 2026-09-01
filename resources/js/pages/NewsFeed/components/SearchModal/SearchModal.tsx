import ModalWrapper from "@/components/wrapper/ModalWrapper/ModalWrapper.tsx";
import SearchBackIcon from "@/components/ui/icons/SearchBackIcon.tsx";
import {SearchModalProps} from "@/pages/NewsFeed/components/SearchModal/SearchModalTypes.ts";

import useSearchModal from "@/pages/NewsFeed/components/SearchModal/hooks/useSearchModal.ts";


function SearchModal({isOpen, onClose}: SearchModalProps) {
    const {handleSubmit, searchRef} = useSearchModal(onClose);

    return (
        <ModalWrapper isOpen={isOpen} onClose={onClose}>
            <div>
                <div className="flex gap-2.5 px-6 py-4.75 items-center">
                    <button onClick={onClose}>
                        <SearchBackIcon/>
                    </button>

                    <form onSubmit={handleSubmit} className='w-full'>
                        <input
                            ref={searchRef}
                            className="w-full border-none text-base text-white placeholder:text-white focus:outline-none"
                            placeholder="Search"
                            name="search"
                        />
                    </form>
                </div>

                <div className="h-px w-full bg-[#EFEFEF4D]"/>

                <div className="ml-16.5 mt-10 flex flex-col gap-11.5">
                    <span className="text-base leading-[150%] text-[#6C757D]">
                        Enter <span className="text-white">@</span> to search movies
                    </span>

                    <span className="text-base leading-[150%] text-[#6C757D]">
                        Enter <span className="text-white">#</span> to search quotes
                    </span>
                </div>
            </div>
        </ModalWrapper>
    );
}

export default SearchModal;
