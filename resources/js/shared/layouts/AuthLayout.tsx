import {ReactNode} from "react";
import AppLayout from "@/shared/layouts/AppLayout.tsx";
import Sidebar from "@/shared/components/Sidebar/Sidebar.tsx";

function AuthLayout({children}: { children: ReactNode }) {
    return <AppLayout>
        <div className="flex px-17.5 min-h-screen gap-10">
            <Sidebar/>
            <div className="flex-1 pt-10">
                {children}
            </div>
        </div>

    </AppLayout>
}

export default AuthLayout;
