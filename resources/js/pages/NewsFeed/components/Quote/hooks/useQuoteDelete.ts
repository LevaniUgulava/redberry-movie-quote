import {router} from "@inertiajs/react";
import {destroy} from "@/actions/App/Http/Controllers/QuoteController.ts";
function useQuoteDelete() {
    const deleteQuote = (id:number) => {
        router.delete(destroy({quote: id}).url, {
            preserveScroll: true,
            preserveState: true,
        });
    }
    return {deleteQuote};
}
export default useQuoteDelete;
