import {useTranslation} from "react-i18next";
import {usePage} from "@inertiajs/react";
import {PageProps} from "@/types/PagePropsTypes.ts";
import {ERROR_CONFIGS} from "@/constants/Error.ts";

function useError(status: number) {
    const {t} = useTranslation("error");
    const {locale} = usePage<PageProps>().props;
    const error = ERROR_CONFIGS[status];
    const Icon = error?.icon;

    const title = t(error?.titleKey ?? "error_404_title");
    const description = t(error?.descKey ?? "error_404_desc");
    const pageTitle = t(error?.pageTitleKey ?? "page_title_404");
    const homeUrl = `/${locale}`;
    const returnHomeText = t("return_home");

    return {title, description, pageTitle, homeUrl, returnHomeText, Icon};
}

export default useError;
