import {ReactNode} from "react";
import AppLayout from "@/shared/layouts/AppLayout.tsx";
import Sidebar from "@/shared/components/Sidebar/Sidebar.tsx";

function AuthLayout({children}: { children: ReactNode }) {
    return <AppLayout>
        <div className="flex px-17.5 max-lg:px-0 min-h-screen gap-25 items-start">
            <div className="max-lg:hidden self-start sticky top-30 z-50">
                <Sidebar/>
            </div>

            <div className="flex-1 mt-10">
                {children}
            </div>
        </div>

    </AppLayout>
}

export default AuthLayout;
