import ReactionIcon from "@/components/ui/NewsFeed/Quotes/ReactionIcon.tsx";
import CommentIcon from "@/components/ui/NewsFeed/Quotes/CommentIcon.tsx";
import {Quote} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";
import {SendIcon} from "lucide-react";
import useQuoteCard from "@/pages/NewsFeed/components/QuoteCard/hooks/useQuoteCard.ts";
import FillReactionIcon from "@/components/ui/NewsFeed/Quotes/FillReactionIcon.tsx";


function QuoteCard({quote}: Quote) {
    const {
        auth,
        submit,
        commentsQuantity,
        comments,
        data,
        processing,
        setData,
        reactionQuantity,
        handleLike,
        liked
    } = useQuoteCard({quote})


    return <div className="bg-[#11101A] rounded-xl p-6 ">
        <div className="flex flex-col gap-5 border-b border-[#EFEFEF]/30">
            <div className="flex gap-4 items-center">
                <img className="w-13 h-13 rounded-full" alt="quote_author" src={quote.user.avatar}/>
                <span className="text-xl text-white font-normal leading-[150%]">{quote.user.username}</span>
            </div>
            <div>
                <span
                    className="text-xl text-white font-normal leading-[150%]">{quote.quote} - {quote.movie.title} {quote.movie.year}</span>
            </div>
            <div className="flex flex-col gap-6 pb-6">
                <img alt="quote_image" className="w-full rounded-[10px]" src={quote.image}/>
                <div className="flex gap-6">
                    <div className="flex gap-4">
                        <span className="text-white text-xl leading-[150%]">{commentsQuantity}</span>
                        <CommentIcon/>

                    </div>
                    <button
                        onClick={handleLike}
                        className="flex gap-4"
                    >
                        <span className="text-white text-xl leading-[150%]">{reactionQuantity}</span>
                        {liked ? <FillReactionIcon/> : <ReactionIcon/>}
                    </button>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-4 mt-5">
            {[...comments].reverse().map((comment, index) => (
                <div key={index} className="flex flex-col gap-3">
                    <div className="flex gap-4 items-center">
                        <img className="w-12 h-12 rounded-full object-cover" alt="quote_author"
                             src={comment.user.avatar}/>
                        <span className="text-xl text-white font-medium leading-[150%]">{comment.user.username}</span>
                    </div>
                    <div
                        className="flex gap-4 items-center border-b border-[#EFEFEF]/30 ml-16">
                        <span className="text-xl text-white font-normal leading-[150%] pb-6">{comment.comment}</span>
                    </div>
                </div>
            ))}
            <div>
                <div className="flex gap-4 items-center">
                    <img className="w-13 h-13 rounded-full" alt="quote_author" src={auth.avatar}/>
                    <form onSubmit={submit} className='relative w-full'>
                        <input
                            type="text"
                            value={data.comment}
                            onChange={e => setData('comment', e.target.value)}
                            name="comment"
                            className="w-full bg-[#24222F] text-[#CED4DA] h-13 rounded-[10px] pl-5 pr-14 text-xl leading-[150%] focus:outline-none"
                            placeholder="Write a comment"
                        />
                        {data.comment && (
                            <button
                                type="submit"
                                disabled={processing}
                                className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-[#5E5CE6] hover:bg-[#4f4de0] text-white rounded-lg transition-colors">
                                <SendIcon className="w-5 h-5"/>
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </div>

    </div>
}

export default QuoteCard;
