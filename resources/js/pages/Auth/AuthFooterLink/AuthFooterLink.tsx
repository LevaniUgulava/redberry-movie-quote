import { Link } from "@inertiajs/react";
import { AuthFooterLinkProps } from "@/pages/Auth/AuthFooterLink/AuthFooterLinkTypes";

function AuthFooterLink({ text, linkName, link }: AuthFooterLinkProps) {
    return (
        <div className="flex justify-center gap-1 text-sm pt-4">
            <span className="text-gray-600">{text}</span>
            <Link
                href={`/?modal=${link}`}
                className="text-[#0D6EFD] underline font-normal"
            >
                {linkName}
            </Link>
        </div>
    );
}
export default AuthFooterLink;
