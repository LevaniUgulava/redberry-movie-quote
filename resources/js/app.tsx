import {createInertiaApp} from "@inertiajs/react";
import {createRoot} from "react-dom/client";
import AppLayout from "@/shared/layouts/AppLayout";
import {ReactNode} from "react";
import {PageComponent} from "@/types/AppTypes";
import AuthLayout from "@/shared/layouts/AuthLayout.tsx";
import {setUrlDefaults} from './wayfinder';
import i18n from './i18n';

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob<PageComponent>("./pages/**/*.tsx", {
            eager: true,
        });
        const page = pages[`./pages/${name}.tsx`];

        if (name === 'Landing/Landing') {
            page.default.layout = (page: ReactNode) => (
                <AppLayout>{page}</AppLayout>
            );
        }else{
            page.default.layout = (page: ReactNode) => (
                <AuthLayout>{page}</AuthLayout>
            );
        }

        return page;
    },

    setup({el, App, props}) {
        const locale = props.initialPage.props.locale;
        setUrlDefaults({
            lang: locale
        });
        i18n.changeLanguage(locale as string);
        createRoot(el).render(<App {...props} />);
    },
});
