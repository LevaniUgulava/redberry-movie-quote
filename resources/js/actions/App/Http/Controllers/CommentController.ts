import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CommentController::store
* @see app/Http/Controllers/CommentController.php:22
* @param lang - Default: '$lang'
* @route '/{lang?}/comment/{id}'
*/
export const store = (args: { lang?: string | number, id: string | number } | [lang: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/{lang?}/comment/{id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CommentController::store
* @see app/Http/Controllers/CommentController.php:22
* @param lang - Default: '$lang'
* @route '/{lang?}/comment/{id}'
*/
store.url = (args: { lang?: string | number, id: string | number } | [lang: string | number, id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            lang: args[0],
            id: args[1],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "lang",
    ])

    const parsedArgs = {
        lang: args.lang ?? '$lang',
        id: args.id,
    }

    return store.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CommentController::store
* @see app/Http/Controllers/CommentController.php:22
* @param lang - Default: '$lang'
* @route '/{lang?}/comment/{id}'
*/
store.post = (args: { lang?: string | number, id: string | number } | [lang: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

const CommentController = { store }

export default CommentController