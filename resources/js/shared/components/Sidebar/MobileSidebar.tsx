import Lang from "@/shared/components/Header/components/Lang/Lang.tsx";
import {LogOut} from "lucide-react";
import Sidebar from "@/shared/components/Sidebar/Sidebar.tsx";
import {MobileSiebarProps} from "@/shared/components/Sidebar/SidebarTypes.ts";
import {router} from "@inertiajs/react";
import {logout} from "@/actions/App/Http/Controllers/AuthController.ts";

function MobileSidebar({setOpen}: MobileSiebarProps) {
    const handleLogout = () => {
        router.post(logout().url);
    };

    return <div className="flex flex-col justify-between h-full">
        <div onClick={() => setOpen(false)}>
            <Sidebar/>
        </div>
        <div
            className="flex items-center justify-between gap-4 bg-[#161320] rounded-xl border border-white/10 px-4 py-3">
            <Lang isSidebar/>
            <button onClick={handleLogout}
                className="flex items-center gap-2 text-red-500 border border-red-500/50 rounded-lg px-4 py-2 text-sm font-medium hover:bg-red-500/10 transition">
                <LogOut className='w-4 h-4'/>
                Logout
            </button>
        </div>
    </div>
}

export default MobileSidebar;
