import {PageProps as InertiaPageProps} from '@inertiajs/core';

export interface AppPageProps<T extends Record<string, unknown> = Record<string, unknown>> extends InertiaPageProps {
    auth: {
        username: string | undefined;
        id: number;
        email: string;
        isGoogleAuthenticate: boolean,
        avatar: string | undefined
    };
    locale: string;
}

export type PageProps<T extends Record<string, unknown> = {}> = AppPageProps & T;
