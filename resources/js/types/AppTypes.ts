import { ResolvedComponent } from "@inertiajs/react";
import { ReactNode } from "react";

export interface PageComponent {
    default: ResolvedComponent & {
        layout?: (page: ReactNode) => ReactNode;
    };
}
