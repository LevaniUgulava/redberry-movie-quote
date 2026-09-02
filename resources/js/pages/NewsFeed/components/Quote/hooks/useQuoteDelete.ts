import {router} from "@inertiajs/react";
import {destroy} from "@/actions/App/Http/Controllers/QuoteController.ts";

function useQuoteDelete() {
    const deleteQuote = (id:number) => {
        if (confirm('Do you want to delete?')) {
            router.delete(destroy({quote: id}).url, {
                preserveScroll: true,
                preserveState: true,
            });
        }
    }
    return {deleteQuote};
}
export default useQuoteDelete;
