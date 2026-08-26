import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MovieController::index
* @see app/Http/Controllers/MovieController.php:23
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
* @see app/Http/Controllers/MovieController.php:23
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
* @see app/Http/Controllers/MovieController.php:23
* @param lang - Default: '$lang'
* @route '/{lang?}/movies'
*/
index.get = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MovieController::index
* @see app/Http/Controllers/MovieController.php:23
* @param lang - Default: '$lang'
* @route '/{lang?}/movies'
*/
index.head = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MovieController::show
* @see app/Http/Controllers/MovieController.php:31
* @param lang - Default: '$lang'
* @route '/{lang?}/movies/{movie}'
*/
export const show = (args: { lang?: string | number, movie: number | { id: number } } | [lang: string | number, movie: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/{lang?}/movies/{movie}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MovieController::show
* @see app/Http/Controllers/MovieController.php:31
* @param lang - Default: '$lang'
* @route '/{lang?}/movies/{movie}'
*/
show.url = (args: { lang?: string | number, movie: number | { id: number } } | [lang: string | number, movie: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            lang: args[0],
            movie: args[1],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "lang",
    ])

    const parsedArgs = {
        lang: args.lang ?? '$lang',
        movie: typeof args.movie === 'object'
        ? args.movie.id
        : args.movie,
    }

    return show.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace('{movie}', parsedArgs.movie.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MovieController::show
* @see app/Http/Controllers/MovieController.php:31
* @param lang - Default: '$lang'
* @route '/{lang?}/movies/{movie}'
*/
show.get = (args: { lang?: string | number, movie: number | { id: number } } | [lang: string | number, movie: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MovieController::show
* @see app/Http/Controllers/MovieController.php:31
* @param lang - Default: '$lang'
* @route '/{lang?}/movies/{movie}'
*/
show.head = (args: { lang?: string | number, movie: number | { id: number } } | [lang: string | number, movie: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MovieController::store
* @see app/Http/Controllers/MovieController.php:42
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
* @see app/Http/Controllers/MovieController.php:42
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
* @see app/Http/Controllers/MovieController.php:42
* @param lang - Default: '$lang'
* @route '/{lang?}/movies/store'
*/
store.post = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MovieController::update
* @see app/Http/Controllers/MovieController.php:36
* @param lang - Default: '$lang'
* @route '/{lang?}/movies/update/{movie}'
*/
export const update = (args: { lang?: string | number, movie: number | { id: number } } | [lang: string | number, movie: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/{lang?}/movies/update/{movie}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MovieController::update
* @see app/Http/Controllers/MovieController.php:36
* @param lang - Default: '$lang'
* @route '/{lang?}/movies/update/{movie}'
*/
update.url = (args: { lang?: string | number, movie: number | { id: number } } | [lang: string | number, movie: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            lang: args[0],
            movie: args[1],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "lang",
    ])

    const parsedArgs = {
        lang: args.lang ?? '$lang',
        movie: typeof args.movie === 'object'
        ? args.movie.id
        : args.movie,
    }

    return update.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace('{movie}', parsedArgs.movie.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MovieController::update
* @see app/Http/Controllers/MovieController.php:36
* @param lang - Default: '$lang'
* @route '/{lang?}/movies/update/{movie}'
*/
update.patch = (args: { lang?: string | number, movie: number | { id: number } } | [lang: string | number, movie: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\MovieController::destroy
* @see app/Http/Controllers/MovieController.php:49
* @param lang - Default: '$lang'
* @route '/{lang?}/movies/destroy/{movie}'
*/
export const destroy = (args: { lang?: string | number, movie: number | { id: number } } | [lang: string | number, movie: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/{lang?}/movies/destroy/{movie}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MovieController::destroy
* @see app/Http/Controllers/MovieController.php:49
* @param lang - Default: '$lang'
* @route '/{lang?}/movies/destroy/{movie}'
*/
destroy.url = (args: { lang?: string | number, movie: number | { id: number } } | [lang: string | number, movie: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            lang: args[0],
            movie: args[1],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "lang",
    ])

    const parsedArgs = {
        lang: args.lang ?? '$lang',
        movie: typeof args.movie === 'object'
        ? args.movie.id
        : args.movie,
    }

    return destroy.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace('{movie}', parsedArgs.movie.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MovieController::destroy
* @see app/Http/Controllers/MovieController.php:49
* @param lang - Default: '$lang'
* @route '/{lang?}/movies/destroy/{movie}'
*/
destroy.delete = (args: { lang?: string | number, movie: number | { id: number } } | [lang: string | number, movie: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const movies = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default movies