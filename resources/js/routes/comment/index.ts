import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../wayfinder'
/**
* @see \App\Http\Controllers\CommentController::store
* @see app/Http/Controllers/CommentController.php:16
* @param lang - Default: '$lang'
* @route '/{lang?}/comment/{quote}'
*/
export const store = (args: { lang?: string | number, quote: number | { id: number } } | [lang: string | number, quote: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/{lang?}/comment/{quote}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CommentController::store
* @see app/Http/Controllers/CommentController.php:16
* @param lang - Default: '$lang'
* @route '/{lang?}/comment/{quote}'
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
* @see \App\Http\Controllers\CommentController::store
* @see app/Http/Controllers/CommentController.php:16
* @param lang - Default: '$lang'
* @route '/{lang?}/comment/{quote}'
*/
store.post = (args: { lang?: string | number, quote: number | { id: number } } | [lang: string | number, quote: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

const comment = {
    store: Object.assign(store, store),
}

export default comment