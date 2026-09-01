import {useTranslation} from "react-i18next";

function Footer() {
    const {t} = useTranslation("layout");
    return (
        <div className="h-12 flex px-17.5 items-center">
            <span className="text-main-beige text-sm uppercase font-medium">
                {t("footer_copyright")}
            </span>
        </div>
    );
}
export default Footer;
