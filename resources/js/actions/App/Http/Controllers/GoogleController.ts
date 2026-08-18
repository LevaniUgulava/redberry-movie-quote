import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\GoogleController::redirectToProvider
* @see app/Http/Controllers/GoogleController.php:13
* @param lang - Default: '$lang'
* @route '/{lang?}/google/redirect'
*/
export const redirectToProvider = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirectToProvider.url(args, options),
    method: 'get',
})

redirectToProvider.definition = {
    methods: ["get","head"],
    url: '/{lang?}/google/redirect',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GoogleController::redirectToProvider
* @see app/Http/Controllers/GoogleController.php:13
* @param lang - Default: '$lang'
* @route '/{lang?}/google/redirect'
*/
redirectToProvider.url = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { lang: args }
    }

    if (Array.isArray(args)) {
        args = {
            lang: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "lang",
    ])

    const parsedArgs = {
        lang: args?.lang ?? '$lang',
    }

    return redirectToProvider.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GoogleController::redirectToProvider
* @see app/Http/Controllers/GoogleController.php:13
* @param lang - Default: '$lang'
* @route '/{lang?}/google/redirect'
*/
redirectToProvider.get = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirectToProvider.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GoogleController::redirectToProvider
* @see app/Http/Controllers/GoogleController.php:13
* @param lang - Default: '$lang'
* @route '/{lang?}/google/redirect'
*/
redirectToProvider.head = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: redirectToProvider.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GoogleController::handleProviderCallback
* @see app/Http/Controllers/GoogleController.php:18
* @param lang - Default: '$lang'
* @route '/{lang?}/google/callback'
*/
export const handleProviderCallback = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handleProviderCallback.url(args, options),
    method: 'get',
})

handleProviderCallback.definition = {
    methods: ["get","head"],
    url: '/{lang?}/google/callback',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GoogleController::handleProviderCallback
* @see app/Http/Controllers/GoogleController.php:18
* @param lang - Default: '$lang'
* @route '/{lang?}/google/callback'
*/
handleProviderCallback.url = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { lang: args }
    }

    if (Array.isArray(args)) {
        args = {
            lang: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "lang",
    ])

    const parsedArgs = {
        lang: args?.lang ?? '$lang',
    }

    return handleProviderCallback.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GoogleController::handleProviderCallback
* @see app/Http/Controllers/GoogleController.php:18
* @param lang - Default: '$lang'
* @route '/{lang?}/google/callback'
*/
handleProviderCallback.get = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handleProviderCallback.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GoogleController::handleProviderCallback
* @see app/Http/Controllers/GoogleController.php:18
* @param lang - Default: '$lang'
* @route '/{lang?}/google/callback'
*/
handleProviderCallback.head = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: handleProviderCallback.url(args, options),
    method: 'head',
})

const GoogleController = { redirectToProvider, handleProviderCallback }

export default GoogleController