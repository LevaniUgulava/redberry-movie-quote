import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\LikeController::store
* @see app/Http/Controllers/LikeController.php:12
* @param lang - Default: '$lang'
* @route '/{lang?}/like/{id}'
*/
export const store = (args: { lang?: string | number, id: string | number } | [lang: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/{lang?}/like/{id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LikeController::store
* @see app/Http/Controllers/LikeController.php:12
* @param lang - Default: '$lang'
* @route '/{lang?}/like/{id}'
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
* @see \App\Http\Controllers\LikeController::store
* @see app/Http/Controllers/LikeController.php:12
* @param lang - Default: '$lang'
* @route '/{lang?}/like/{id}'
*/
store.post = (args: { lang?: string | number, id: string | number } | [lang: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

const LikeController = { store }

export default LikeController