import {PageProps as InertiaPageProps} from '@inertiajs/core';

export interface PageProps extends InertiaPageProps {
    auth: {
        username: string | undefined;
        id: number;
        email: string;
        isGoogleAuthenticate:boolean,
        avatar:string|undefined
    };
}
