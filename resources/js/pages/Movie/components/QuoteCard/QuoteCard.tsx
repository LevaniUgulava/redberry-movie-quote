import CommentIcon from "@/components/ui/NewsFeed/Quotes/CommentIcon.tsx";
import ReactionIcon from "@/components/ui/NewsFeed/Quotes/ReactionIcon.tsx";
import DotsIcon from "@/components/ui/icons/Movie/DotsIcon.tsx";
import PopOverWrapper from "@/components/wrapper/PopOver/PopOverWrapper.tsx";
import PopOverContent from "@/pages/Movie/components/PopOverContent/PopOverContent.tsx";
import ModalWrapper from "@/components/wrapper/ModalWrapper/ModalWrapper.tsx";
import {router, usePage} from "@inertiajs/react";
import {QuoteCardData} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";

function QuoteCard({quote,movie_id}: { quote: QuoteCardData,movie_id:number }) {

    return <div className="bg-[#11101A] rounded-xl p-5 flex flex-col gap-5">
        <div className='flex gap-5 relative'>
            <div>
                <img className="w-56.5 h-35 rounded-xs object-cover" alt="quote-image" src={quote.image}/>
            </div>
            <div className='flex items-center'>
                <span className="text-2xl leading-[150%] italic text-[#CED4DA]">"{quote.quote}"</span>
            </div>
            <div className="absolute top-0 right-0">
                <PopOverWrapper body={<PopOverContent id={quote.id} movie_id={movie_id}/>}>
                    <DotsIcon/>
                </PopOverWrapper>
            </div>
        </div>
        <div className='w-full h-px bg-[#EFEFEF33]'></div>
        <div className="flex gap-6">
            <div className="flex gap-4">
                <CommentIcon/>
                <span className="text-white text-xl leading-[150%]">{quote.comment_quantity}</span>
            </div>
            <div className="flex gap-4">
                <ReactionIcon/>
                <span className="text-white text-xl leading-[150%]">{quote.reaction_quantity}</span>
            </div>
        </div>

    </div>
}

export default QuoteCard;
