import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\NotificationController::markAsRead
* @see app/Http/Controllers/NotificationController.php:18
* @param lang - Default: '$lang'
* @route '/{lang?}/notification/mark-as-read/{id}'
*/
export const markAsRead = (args: { lang?: string | number, id: string | number } | [lang: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsRead.url(args, options),
    method: 'post',
})

markAsRead.definition = {
    methods: ["post"],
    url: '/{lang?}/notification/mark-as-read/{id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NotificationController::markAsRead
* @see app/Http/Controllers/NotificationController.php:18
* @param lang - Default: '$lang'
* @route '/{lang?}/notification/mark-as-read/{id}'
*/
markAsRead.url = (args: { lang?: string | number, id: string | number } | [lang: string | number, id: string | number ], options?: RouteQueryOptions) => {
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

    return markAsRead.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::markAsRead
* @see app/Http/Controllers/NotificationController.php:18
* @param lang - Default: '$lang'
* @route '/{lang?}/notification/mark-as-read/{id}'
*/
markAsRead.post = (args: { lang?: string | number, id: string | number } | [lang: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsRead.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::markAllAsRead
* @see app/Http/Controllers/NotificationController.php:27
* @param lang - Default: '$lang'
* @route '/{lang?}/notification/mark-all-read'
*/
export const markAllAsRead = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAllAsRead.url(args, options),
    method: 'post',
})

markAllAsRead.definition = {
    methods: ["post"],
    url: '/{lang?}/notification/mark-all-read',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NotificationController::markAllAsRead
* @see app/Http/Controllers/NotificationController.php:27
* @param lang - Default: '$lang'
* @route '/{lang?}/notification/mark-all-read'
*/
markAllAsRead.url = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return markAllAsRead.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::markAllAsRead
* @see app/Http/Controllers/NotificationController.php:27
* @param lang - Default: '$lang'
* @route '/{lang?}/notification/mark-all-read'
*/
markAllAsRead.post = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAllAsRead.url(args, options),
    method: 'post',
})

const NotificationController = { markAsRead, markAllAsRead }

export default NotificationController