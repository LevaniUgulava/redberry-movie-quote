import {RouteDefinition} from "@/wayfinder";
import {router} from "@inertiajs/react";

function useNotificationModal() {
    const handleMark = (route: RouteDefinition<"post">) => {
        router.post(route, {}, {
            preserveScroll: true,
            only: ['notifications', 'notificationsQuantity'],
        })
    }

    return {handleMark};
}

export default useNotificationModal;
