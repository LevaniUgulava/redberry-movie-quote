import EyeIcon from "@/components/ui/icons/Movie/EyeIcon.tsx";
import EditIcon from "@/components/ui/icons/Movie/EditIcon.tsx";
import DeleteIcon from "@/components/ui/icons/Movie/DeleteIcon.tsx";
import LocaleLink from "@/components/LocaleLink.tsx";

import useQuoteDelete from "@/pages/NewsFeed/components/Quote/hooks/useQuoteDelete.ts";
import usePopover from "@/pages/Movie/components/PopOverContent/hooks/usePopover.ts";
import {useTranslation} from "react-i18next";

function PopOverContent({id, movie_id}: { id: number, movie_id: number }) {

    const {url, deleteQuote} = usePopover(movie_id, id);
    const {t} = useTranslation("common");

    return <div className="flex flex-col gap-6 p-3">
        <LocaleLink href={url('view')}
                    className='flex gap-4 cursor-pointer p-2 rounded-lg items-center hover:bg-white/5'>
            <EyeIcon/>
            <span className='text-base leading-[150%] font-normal text-white'>{t("view")}</span>
        </LocaleLink>
        <LocaleLink href={url('edit')}
                    className='flex gap-4 cursor-pointer p-2 rounded-lg items-center hover:bg-white/5'>
            <EditIcon/>
            <span className='text-base leading-[150%] font-normal text-white'>{t("edit")}</span>
        </LocaleLink>
        <button onClick={() => deleteQuote(id)}
                className='flex gap-4 cursor-pointer p-2 rounded-lg items-center hover:bg-white/5'>
            <DeleteIcon/>
            <span className='text-base leading-[150%] font-normal text-white'>{t("delete")}</span>
        </button>
    </div>
}

export default PopOverContent;
