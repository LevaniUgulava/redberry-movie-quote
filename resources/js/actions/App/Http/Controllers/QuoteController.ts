import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\QuoteController::index
* @see app/Http/Controllers/QuoteController.php:20
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
* @see app/Http/Controllers/QuoteController.php:20
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
* @see app/Http/Controllers/QuoteController.php:20
* @param lang - Default: '$lang'
* @route '/{lang?}/newsfeed'
*/
index.get = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\QuoteController::index
* @see app/Http/Controllers/QuoteController.php:20
* @param lang - Default: '$lang'
* @route '/{lang?}/newsfeed'
*/
index.head = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\QuoteController::store
* @see app/Http/Controllers/QuoteController.php:35
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
* @see app/Http/Controllers/QuoteController.php:35
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
* @see app/Http/Controllers/QuoteController.php:35
* @param lang - Default: '$lang'
* @route '/{lang?}/quote/store'
*/
store.post = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\QuoteController::update
* @see app/Http/Controllers/QuoteController.php:43
* @param lang - Default: '$lang'
* @route '/{lang?}/quote/update/{quote}'
*/
export const update = (args: { lang?: string | number, quote: number | { id: number } } | [lang: string | number, quote: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/{lang?}/quote/update/{quote}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\QuoteController::update
* @see app/Http/Controllers/QuoteController.php:43
* @param lang - Default: '$lang'
* @route '/{lang?}/quote/update/{quote}'
*/
update.url = (args: { lang?: string | number, quote: number | { id: number } } | [lang: string | number, quote: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace('{quote}', parsedArgs.quote.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuoteController::update
* @see app/Http/Controllers/QuoteController.php:43
* @param lang - Default: '$lang'
* @route '/{lang?}/quote/update/{quote}'
*/
update.put = (args: { lang?: string | number, quote: number | { id: number } } | [lang: string | number, quote: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\QuoteController::destroy
* @see app/Http/Controllers/QuoteController.php:52
* @param lang - Default: '$lang'
* @route '/{lang?}/quote/delete/{quote}'
*/
export const destroy = (args: { lang?: string | number, quote: number | { id: number } } | [lang: string | number, quote: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/{lang?}/quote/delete/{quote}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\QuoteController::destroy
* @see app/Http/Controllers/QuoteController.php:52
* @param lang - Default: '$lang'
* @route '/{lang?}/quote/delete/{quote}'
*/
destroy.url = (args: { lang?: string | number, quote: number | { id: number } } | [lang: string | number, quote: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace('{quote}', parsedArgs.quote.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\QuoteController::destroy
* @see app/Http/Controllers/QuoteController.php:52
* @param lang - Default: '$lang'
* @route '/{lang?}/quote/delete/{quote}'
*/
destroy.delete = (args: { lang?: string | number, quote: number | { id: number } } | [lang: string | number, quote: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const QuoteController = { index, store, update, destroy }

export default QuoteController