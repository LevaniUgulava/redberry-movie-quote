import { ReactNode } from "react";
import Header from "@/shared/components/Header/Header";
import Footer from "@/shared/components/Footer/Footer";

function AppLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
export default AppLayout;
