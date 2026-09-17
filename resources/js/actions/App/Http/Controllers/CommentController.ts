import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CommentController::index
* @see app/Http/Controllers/CommentController.php:20
* @param lang - Default: '$lang'
* @route '/{lang?}/comment/{quote}/comments'
*/
export const index = (args: { lang?: string | number, quote: number | { id: number } } | [lang: string | number, quote: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/{lang?}/comment/{quote}/comments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CommentController::index
* @see app/Http/Controllers/CommentController.php:20
* @param lang - Default: '$lang'
* @route '/{lang?}/comment/{quote}/comments'
*/
index.url = (args: { lang?: string | number, quote: number | { id: number } } | [lang: string | number, quote: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace('{quote}', parsedArgs.quote.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CommentController::index
* @see app/Http/Controllers/CommentController.php:20
* @param lang - Default: '$lang'
* @route '/{lang?}/comment/{quote}/comments'
*/
index.get = (args: { lang?: string | number, quote: number | { id: number } } | [lang: string | number, quote: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CommentController::index
* @see app/Http/Controllers/CommentController.php:20
* @param lang - Default: '$lang'
* @route '/{lang?}/comment/{quote}/comments'
*/
index.head = (args: { lang?: string | number, quote: number | { id: number } } | [lang: string | number, quote: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CommentController::store
* @see app/Http/Controllers/CommentController.php:48
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
* @see app/Http/Controllers/CommentController.php:48
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
* @see app/Http/Controllers/CommentController.php:48
* @param lang - Default: '$lang'
* @route '/{lang?}/comment/{quote}'
*/
store.post = (args: { lang?: string | number, quote: number | { id: number } } | [lang: string | number, quote: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

const CommentController = { index, store }

export default CommentController