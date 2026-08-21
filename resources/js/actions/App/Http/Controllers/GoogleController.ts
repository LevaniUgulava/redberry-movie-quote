import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\GoogleController::redirectToProvider
* @see app/Http/Controllers/GoogleController.php:13
* @route '/google/redirect'
*/
export const redirectToProvider = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirectToProvider.url(options),
    method: 'get',
})

redirectToProvider.definition = {
    methods: ["get","head"],
    url: '/google/redirect',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GoogleController::redirectToProvider
* @see app/Http/Controllers/GoogleController.php:13
* @route '/google/redirect'
*/
redirectToProvider.url = (options?: RouteQueryOptions) => {
    return redirectToProvider.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GoogleController::redirectToProvider
* @see app/Http/Controllers/GoogleController.php:13
* @route '/google/redirect'
*/
redirectToProvider.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirectToProvider.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GoogleController::redirectToProvider
* @see app/Http/Controllers/GoogleController.php:13
* @route '/google/redirect'
*/
redirectToProvider.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: redirectToProvider.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GoogleController::handleProviderCallback
* @see app/Http/Controllers/GoogleController.php:18
* @route '/google/callback'
*/
export const handleProviderCallback = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handleProviderCallback.url(options),
    method: 'get',
})

handleProviderCallback.definition = {
    methods: ["get","head"],
    url: '/google/callback',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GoogleController::handleProviderCallback
* @see app/Http/Controllers/GoogleController.php:18
* @route '/google/callback'
*/
handleProviderCallback.url = (options?: RouteQueryOptions) => {
    return handleProviderCallback.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GoogleController::handleProviderCallback
* @see app/Http/Controllers/GoogleController.php:18
* @route '/google/callback'
*/
handleProviderCallback.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handleProviderCallback.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GoogleController::handleProviderCallback
* @see app/Http/Controllers/GoogleController.php:18
* @route '/google/callback'
*/
handleProviderCallback.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: handleProviderCallback.url(options),
    method: 'head',
})

const GoogleController = { redirectToProvider, handleProviderCallback }

export default GoogleController