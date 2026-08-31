import {Form} from "@inertiajs/react";
import Input from "@/pages/Movies/components/MovieForm/components/Input.tsx";
import QuoteCard from "@/pages/NewsFeed/components/QuoteCard/QuoteCard.tsx";
import {QuoteCardProps} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";
import PhotoIcon from "@/components/ui/icons/Movie/PhotoIcon.tsx";
import {update} from "@/actions/App/Http/Controllers/QuoteController";
import useQuoteEdit from "@/pages/NewsFeed/components/Quote/Quote/hooks/useQuoteEdit.ts";


function QuoteEdit({quote}: QuoteCardProps) {
    const {auth, currentModal, handleImageUpload, openImageUpload,preview,imageRef} = useQuoteEdit();

    return <div className="px-5 flex flex-col gap-6  max-h-[80vh] overflow-y-auto pb-5">
        <div className="flex items-center gap-2.5 ">
            <img className="h-15 w-15 rounded-full" alt="profile_imgae" src={auth.avatar}/>
            <span className="text-white text-xl leading-[150%]">{auth.username}</span>
        </div>
        <Form
            action={update({quote: quote.id})}
            method='put'
            className="gap-3 flex flex-col">
            {({errors}) => (
                <>
                    <Input defaultValue={quote.en_quote} error={errors.en_quote} name="en_quote"
                           placeholder="Start create new quote" lang="Eng" disabled={currentModal === 'view'}
                           multiline={currentModal === 'edit'}
                    />
                    <Input defaultValue={quote.ka_quote} error={errors.ka_quote} name="ka_quote"
                           placeholder="ახალი ციტატა" lang="ქარ" disabled={currentModal === 'view'}
                           multiline={currentModal === 'edit'}/>
                    {currentModal === "edit" &&
                        <>
                            <div className='relative'>

                                <img alt="quote_image" className="w-full rounded-[10px]"
                                     src={preview ? preview : quote.image}/>
                                <div onClick={openImageUpload}
                                     className='absolute inset-0 flex items-center justify-center rounded-[10px] cursor-pointer'>
                                    <div
                                        className="bg-[#181623]/80 gap-2.5 p-5 flex flex-col rounded-xl items-center justify-center">
                                        <PhotoIcon/>
                                        <span
                                            className="text-base text-white font-normal">change photo</span>
                                    </div>
                                </div>

                                <input ref={imageRef} onChange={handleImageUpload} type='file' name='image'
                                       className='hidden'/>
                            </div>
                            <button
                                className="bg-main-red rounded-[4.8px] text-white text-xl font-normal leading-[150%] py-2.25 px-4.25">
                                Save Changes
                            </button>
                        </>
                    }
                </>
            )}
        </Form>
        {currentModal === "view" && <QuoteCard currentModal={currentModal} quote={quote}/>}

    </div>
}

export default QuoteEdit;
