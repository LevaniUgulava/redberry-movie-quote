import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../wayfinder'
/**
* @see \App\Http\Controllers\LikeController::store
* @see app/Http/Controllers/LikeController.php:18
* @param lang - Default: '$lang'
* @route '/{lang?}/like/{quote}'
*/
export const store = (args: { lang?: string | number, quote: number | { id: number } } | [lang: string | number, quote: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/{lang?}/like/{quote}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LikeController::store
* @see app/Http/Controllers/LikeController.php:18
* @param lang - Default: '$lang'
* @route '/{lang?}/like/{quote}'
*/
store.url = (args: { lang?: string | number, quote: number | { id: number } } | [lang: string | number, quote: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            lang: args[0],
            quote: args[1],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "lang",
    ])

    const parsedArgs = {
        lang: args.lang ?? '$lang',
        quote: typeof args.quote === 'object'
        ? args.quote.id
        : args.quote,
    }

    return store.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace('{quote}', parsedArgs.quote.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LikeController::store
* @see app/Http/Controllers/LikeController.php:18
* @param lang - Default: '$lang'
* @route '/{lang?}/like/{quote}'
*/
store.post = (args: { lang?: string | number, quote: number | { id: number } } | [lang: string | number, quote: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

const like = {
    store: Object.assign(store, store),
}

export default like