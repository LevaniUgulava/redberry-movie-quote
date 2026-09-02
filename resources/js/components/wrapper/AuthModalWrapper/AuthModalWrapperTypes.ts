import {ReactNode} from "react";

export interface AuthModalWrapperProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: VoidFunction;
    className?: string,
    isConfig: boolean
}
