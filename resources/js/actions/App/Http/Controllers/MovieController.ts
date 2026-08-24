import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MovieController::index
* @see app/Http/Controllers/MovieController.php:21
* @param lang - Default: '$lang'
* @route '/{lang?}/movies'
*/
export const index = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/{lang?}/movies',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MovieController::index
* @see app/Http/Controllers/MovieController.php:21
* @param lang - Default: '$lang'
* @route '/{lang?}/movies'
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
* @see \App\Http\Controllers\MovieController::index
* @see app/Http/Controllers/MovieController.php:21
* @param lang - Default: '$lang'
* @route '/{lang?}/movies'
*/
index.get = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MovieController::index
* @see app/Http/Controllers/MovieController.php:21
* @param lang - Default: '$lang'
* @route '/{lang?}/movies'
*/
index.head = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MovieController::store
* @see app/Http/Controllers/MovieController.php:30
* @param lang - Default: '$lang'
* @route '/{lang?}/movies/store'
*/
export const store = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/{lang?}/movies/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MovieController::store
* @see app/Http/Controllers/MovieController.php:30
* @param lang - Default: '$lang'
* @route '/{lang?}/movies/store'
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
* @see \App\Http\Controllers\MovieController::store
* @see app/Http/Controllers/MovieController.php:30
* @param lang - Default: '$lang'
* @route '/{lang?}/movies/store'
*/
store.post = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

const MovieController = { index, store }

export default MovieController