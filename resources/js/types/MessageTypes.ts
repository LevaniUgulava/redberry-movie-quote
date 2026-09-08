import {MouseEvent, ReactNode} from "react";

export interface MessageProps {
    icon: ReactNode;
    title: string;
    subtitle: string;
    button: string;
    skip?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    onSkip?: () => void;
}
