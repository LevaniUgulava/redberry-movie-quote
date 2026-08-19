import LocaleLink from "@/components/LocaleLink";
import { AuthFooterLinkProps } from "@/pages/Auth/AuthFooterLink/AuthFooterLinkTypes";

function AuthFooterLink({ text, linkName, link }: AuthFooterLinkProps) {
    return (
        <div className="flex justify-center gap-1 text-sm pt-4">
            <span className="text-gray-600">{text}</span>
            <LocaleLink
                href={`/?modal=${link}`}
                className="text-[#0D6EFD] underline font-normal"
            >
                {linkName}
            </LocaleLink>
        </div>
    );
}
export default AuthFooterLink;
