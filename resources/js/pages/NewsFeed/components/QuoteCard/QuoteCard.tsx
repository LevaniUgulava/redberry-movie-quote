import ReactionIcon from "@/components/ui/NewsFeed/Quotes/ReactionIcon.tsx";
import CommentIcon from "@/components/ui/NewsFeed/Quotes/CommentIcon.tsx";
import {usePage} from "@inertiajs/react";
import {PageProps} from "@/types/PagePropsTypes.ts";
import {QuoteEntry} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";


function QuoteCard({quote}: QuoteEntry) {
    const {auth} = usePage<PageProps>().props
    return <div className="bg-[#11101A] rounded-xl p-6 ">
        <div className="flex flex-col gap-5 border-b border-[#EFEFEF]/30">
            <div className="flex gap-4 items-center">
                <img className="w-13 h-13 rounded-full" alt="quote_author" src={quote.user_avatar}/>
                <span className="text-xl text-white font-normal leading-[150%]">{quote.user_name}</span>
            </div>
            <div>
                <span className="text-xl text-white font-normal leading-[150%]">{quote.quote.content.title}</span>
            </div>
            <div className="flex flex-col gap-6 pb-6">
                <img alt="quote_image" className="w-full rounded-[10px]" src={quote.quote.image}/>
                <div className="flex gap-6">
                    <div className="flex gap-4">
                        <CommentIcon/>
                        <span className="text-white text-xl leading-[150%]">{quote.quote.comment_quantity}</span>
                    </div>
                    <div className="flex gap-4">
                        <ReactionIcon/>
                        <span className="text-white text-xl leading-[150%]">{quote.quote.reaction_quantity}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-4 mt-5">
            {quote.quote.comments.map((comment, index) => (
                <div key={index} className="flex flex-col gap-3">
                    <div className="flex gap-4 items-center">
                        <img className="w-13 h-13 rounded-full" alt="quote_author" src={comment.user_avatar}/>
                        <span className="text-xl text-white font-medium leading-[150%]">{comment.user_name}</span>
                    </div>
                    <div className="flex gap-4 items-center border-b border-[#EFEFEF]/30 ml-17">
                        <span className="text-xl text-white font-normal leading-[150%] pb-6">{comment.comment}</span>
                    </div>
                </div>
            ))}
            <div>
                <div className="flex gap-4 items-center">
                    <img className="w-13 h-13 rounded-full" alt="quote_author" src={auth.avatar}/>
                    <input className="w-full bg-[#24222F] text-[#CED4DA] h-13 rounded-[10px] px-5 text-xl leading-[150%] focus:outline-none" placeholder="Write a comment"/>
                </div>
            </div>
        </div>

    </div>
}

export default QuoteCard;
