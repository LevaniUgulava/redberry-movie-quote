import { Link, usePage } from "@inertiajs/react";
import { ComponentProps } from "react";

function LocaleLink({ href, ...props }: ComponentProps<typeof Link>) {
    const { locale } = usePage().props;

    let localizedHref = href;
    if (typeof href === "string") {
        localizedHref = href.startsWith(`/${locale}`) ? href : `/${locale}${href}`;
    }

    return <Link href={localizedHref} {...props} />;
}

export default LocaleLink;
