import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../wayfinder'
/**
* @see \App\Http\Controllers\QuoteController::store
* @see app/Http/Controllers/QuoteController.php:29
* @param lang - Default: '$lang'
* @route '/{lang?}/quote/store'
*/
export const store = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/{lang?}/quote/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\QuoteController::store
* @see app/Http/Controllers/QuoteController.php:29
* @param lang - Default: '$lang'
* @route '/{lang?}/quote/store'
*/
store.url = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuoteController::store
* @see app/Http/Controllers/QuoteController.php:29
* @param lang - Default: '$lang'
* @route '/{lang?}/quote/store'
*/
store.post = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

const quote = {
    store: Object.assign(store, store),
}

export default quote