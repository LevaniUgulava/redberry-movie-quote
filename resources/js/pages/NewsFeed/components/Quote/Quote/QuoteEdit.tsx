import {Form} from "@inertiajs/react";
import Input from "@/pages/Movies/components/MovieForm/components/Input.tsx";
import QuoteCard from "@/pages/NewsFeed/components/QuoteCard/QuoteCard.tsx";
import {QuoteCardProps} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";
import PhotoIcon from "@/components/ui/icons/Movie/PhotoIcon.tsx";
import {update} from "@/actions/App/Http/Controllers/QuoteController";
import useQuoteEdit from "@/pages/NewsFeed/components/Quote/Quote/hooks/useQuoteEdit.ts";
import {useTranslation} from "react-i18next";


function QuoteEdit({quote, handleClose}: QuoteCardProps) {
    const {auth, currentModal, handleImageUpload, openImageUpload, preview, imageRef} = useQuoteEdit();
    const {t} = useTranslation(["newsfeed", "common"]);

    return <div className="px-5 flex-1 min-h-0 overflow-y-auto flex flex-col gap-6 pb-5">
        <div className="flex items-center gap-2.5 ">
            <img className="h-15 w-15 rounded-full object-cover" alt="profile_image" src={auth.avatar}/>
            <span className="text-white text-xl leading-[150%]">{auth.username}</span>
        </div>
        <Form
            action={update({quote: quote.id})}
            method='put'
            className="gap-3 flex flex-col"
            onSuccess={handleClose}>
            {({errors}) => (
                <>
                    <Input showPrefix={true} prefix="Quote:" pl="pl-5" defaultValue={quote.en_quote}
                           error={errors.en_quote} name="en_quote"
                           placeholder="Start create new quote" lang="Eng" disabled={currentModal === 'view'}
                           multiline={currentModal === 'edit'}
                    />
                    <Input showPrefix={true} prefix="ციტატა:" pl="pl-5" defaultValue={quote.ka_quote}
                           error={errors.ka_quote} name="ka_quote"
                           placeholder="ახალი ციტატა" lang="ქარ" disabled={currentModal === 'view'}
                           multiline={currentModal === 'edit'}/>
                    {currentModal === "edit" &&
                        <>
                            <div className='relative'>

                                <img alt="quote_image" className="w-full rounded-[10px] object-cover"
                                     src={preview ? preview : quote.image}/>
                                <div onClick={openImageUpload}
                                     className='absolute inset-0 flex items-center justify-center rounded-[10px] cursor-pointer'>
                                    <div
                                        className="bg-[#181623]/80 gap-2.5 p-5 flex flex-col rounded-xl items-center justify-center">
                                        <PhotoIcon/>
                                        <span
                                            className="text-base text-white font-normal">{t("change_photo")}</span>
                                    </div>
                                </div>

                                <input ref={imageRef} onChange={handleImageUpload} type='file' name='image'
                                       className='hidden'/>
                            </div>
                            <button
                                className="bg-main-red hover:bg-[#CC0E10] rounded-[4.8px] text-white text-xl font-normal leading-[150%] py-2.25 px-4.25 cursor-pointer transition-colors">
                                {t("save_changes")}
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
