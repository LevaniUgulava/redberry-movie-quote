import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../wayfinder'
/**
* @see \App\Http\Controllers\QuoteController::index
* @see app/Http/Controllers/QuoteController.php:22
* @param lang - Default: '$lang'
* @route '/{lang?}/newsfeed'
*/
export const index = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/{lang?}/newsfeed',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\QuoteController::index
* @see app/Http/Controllers/QuoteController.php:22
* @param lang - Default: '$lang'
* @route '/{lang?}/newsfeed'
*/
index.url = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuoteController::index
* @see app/Http/Controllers/QuoteController.php:22
* @param lang - Default: '$lang'
* @route '/{lang?}/newsfeed'
*/
index.get = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\QuoteController::index
* @see app/Http/Controllers/QuoteController.php:22
* @param lang - Default: '$lang'
* @route '/{lang?}/newsfeed'
*/
index.head = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

const quotes = {
    index: Object.assign(index, index),
}

export default quotes