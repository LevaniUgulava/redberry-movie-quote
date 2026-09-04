import {ComponentType} from "react";
import ForbiddenIcon from "@/components/ui/icons/Error/ForbiddenIcon.tsx";
import NotFoundIcon from "@/components/ui/icons/Error/NotFoundIcon.tsx";

type ErrorConfig = {
    titleKey: string;
    descKey: string;
    icon: ComponentType;
    pageTitleKey: string;
};

export const ERROR_CONFIGS: Record<number, ErrorConfig> = {
    403: {
        titleKey: "error_403_title",
        descKey: "error_403_desc",
        icon: ForbiddenIcon,
        pageTitleKey: "page_title_403",
    },
    404: {
        titleKey: "error_404_title",
        descKey: "error_404_desc",
        icon: NotFoundIcon,
        pageTitleKey: "page_title_404",
    },
};
