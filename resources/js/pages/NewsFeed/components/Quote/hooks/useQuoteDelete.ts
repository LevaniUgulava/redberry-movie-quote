import {router} from "@inertiajs/react";
import {destroy} from "@/actions/App/Http/Controllers/QuoteController.ts";
import {useTranslation} from "react-i18next";

function useQuoteDelete() {
    const {t} = useTranslation("common");
    const deleteQuote = (id:number) => {
        if (confirm(t("confirm_delete"))) {
            router.delete(destroy({quote: id}).url, {
                preserveScroll: true,
                preserveState: true,
            });
        }
    }
    return {deleteQuote};
}
export default useQuoteDelete;
