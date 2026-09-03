import {Head, Link} from "@inertiajs/react";
import useError from "@/pages/Error/hooks/useError.ts";

function ErrorPage({status}: { status: number }) {
    const {title, description, pageTitle, homeUrl, returnHomeText, Icon} = useError(status);

    return <div className="min-h-screen w-full flex flex-col justify-center items-center gap-12">
        <Head title={pageTitle}/>
        <div>{Icon && <Icon/>}</div>
        <div className="flex flex-col items-center text-center gap-6">
            <span className="text-white text-5xl font-bold">{title}</span>
            <span className="text-white text-2xl font-medium">{description}</span>
        </div>
        <Link href={homeUrl}
              className="bg-main-red rounded-[4.8px] text-xl px-4.25 py-2.25 text-white">
            {returnHomeText}
        </Link>
    </div>
}

export default ErrorPage;
