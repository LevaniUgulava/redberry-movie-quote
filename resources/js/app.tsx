import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import AppLayout from "@/shared/layouts/AppLayout";
import { ReactNode } from "react";
import { PageComponent } from "@/types/AppTypes";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob<PageComponent>("./pages/**/*.tsx", {
            eager: true,
        });
        const page = pages[`./pages/${name}.tsx`];
        page.default.layout = (page: ReactNode) => (
            <AppLayout>{page}</AppLayout>
        );
        return page;
    },

    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
