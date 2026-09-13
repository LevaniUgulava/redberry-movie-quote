import ReactionIcon from "@/components/ui/NewsFeed/Quotes/ReactionIcon.tsx";
import CommentIcon from "@/components/ui/NewsFeed/Quotes/CommentIcon.tsx";
import {QuoteCardProps} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";
import {ChevronDown, SendIcon} from "lucide-react";
import useQuoteCard from "@/pages/NewsFeed/components/QuoteCard/hooks/useQuoteCard.ts";
import FillReactionIcon from "@/components/ui/NewsFeed/Quotes/FillReactionIcon.tsx";
import {cn} from "@/lib/utils.ts";
import {useTranslation} from "react-i18next";


function QuoteCard({quote}: QuoteCardProps) {
    const {t} = useTranslation("newsfeed");
    const {
        auth,
        submit,
        commentsQuantity,
        comments,
        hasMore,
        loadMore,
        loadingComments,
        comment,
        processing,
        setComment,
        reactionQuantity,
        handleLike,
        liked
    } = useQuoteCard(quote)

    return <div className={cn("bg-[#11101A] rounded-xl p-6 max-lg:px-8.75 max-lg:rounded-none", {
        'p-0 bg-transparent': !quote.user
    })}>
        <div className="flex flex-col gap-5 border-b border-[#EFEFEF]/30">
            {quote.user && <div className="flex gap-4 items-center">
                <img className="w-13 max-lg:w-10 max-lg:h-10 object-cover h-13 rounded-full" alt="quote_author"
                     src={quote.user.avatar}/>
                <span
                    className="text-xl text-white max-lg:text-base font-normal leading-[150%]">{quote.user.username}</span>
            </div>}
            {quote.movie && <div>
                <span
                    className="text-xl max-lg:text-base text-white font-normal leading-[150%]">{quote.quote} - <span
                    className="text-[#E8D5B0] font-semibold">{quote.movie.title}</span> ({quote.movie.year})</span>
            </div>}
            <div className="flex flex-col gap-6 pb-6">
                <img alt="quote_image" className="w-full rounded-[10px] object-cover" src={quote.image}/>
                <div className="flex gap-6">
                    <div className="flex gap-4 items-center">
                        <span className="text-white text-xl leading-[150%]">{commentsQuantity}</span>
                        <CommentIcon/>
                    </div>
                    <button
                        onClick={handleLike}
                        className="flex gap-4 items-center cursor-pointer"
                    >
                        <span className="text-white text-xl leading-[150%]">{reactionQuantity}</span>
                        {liked ? <FillReactionIcon/> : <ReactionIcon/>}
                    </button>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-4 mt-5">
            {hasMore && (
                <button
                    onClick={loadMore}
                    disabled={loadingComments}
                    className="group flex items-center gap-1.5 text-[#ADB5BD] text-sm font-medium tracking-wide hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200"
                >
                    {loadingComments ? (
                        <span className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 border-2 border-white/20 border-t-white rounded-full animate-spin"/>
                <span>{t("loading")}</span>
            </span>
                    ) : (
                        <>
                            <span>{t("load_more")}</span>
                            <ChevronDown
                                className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-1"/>
                        </>
                    )}
                </button>
            )}
            {comments.length === 0 && (
                <span className="text-[#6C757D] text-sm">{t("no_comments_yet")}</span>
            )}
            {comments.map((comment) => (
                <div key={comment.id} className="flex flex-col gap-3 max-lg:gap-1.5">
                    <div className="flex gap-4 items-center">
                        <img className="w-12 h-12 max-lg:w-10 max-lg:h-10 rounded-full object-cover" alt="quote_author"
                             src={comment.user.avatar}/>
                        <span
                            className="text-xl max-lg:text-base text-white font-medium leading-[150%]">{comment.user.username}</span>
                    </div>
                    <div
                        className="flex gap-4 items-center border-b border-[#EFEFEF]/30 ml-16">
                        <span
                            className="text-xl max-lg:text-base text-white font-normal leading-[150%] pb-6">{comment.comment}</span>
                    </div>
                </div>
            ))}
            <div>
                <div className="flex gap-4 items-center">
                    <img className="w-13 h-13 max-lg:w-10 max-lg:h-10 object-cover rounded-full" alt="quote_author"
                         src={auth.avatar}/>
                    <form onSubmit={submit} className='relative w-full'>
                        <input
                            type="text"
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            name="comment"
                            className="w-full bg-[#24222F] text-[#CED4DA] h-13 max-lg:h-10 rounded-[10px] pl-5 pr-14 text-xl max-lg:text-base leading-[150%] focus:outline-none"
                            placeholder={t("write_a_comment")}
                        />
                        {comment && (
                            <button
                                type="submit"
                                disabled={processing}
                                className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 max-lg:w-8 max-lg:h-8 bg-[#5E5CE6] hover:bg-[#4f4de0] text-white rounded-lg transition-colors">
                                <SendIcon className="w-5 h-5 max-lg:w-4 max-lg:h-4"/>
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default QuoteCard;
