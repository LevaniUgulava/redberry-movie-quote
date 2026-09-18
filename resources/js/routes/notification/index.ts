import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../wayfinder'
/**
* @see \App\Http\Controllers\NotificationController::markAsRead
* @see app/Http/Controllers/NotificationController.php:16
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
* @see app/Http/Controllers/NotificationController.php:16
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
* @see app/Http/Controllers/NotificationController.php:16
* @param lang - Default: '$lang'
* @route '/{lang?}/notification/mark-as-read/{id}'
*/
markAsRead.post = (args: { lang?: string | number, id: string | number } | [lang: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsRead.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::markAllRead
* @see app/Http/Controllers/NotificationController.php:25
* @param lang - Default: '$lang'
* @route '/{lang?}/notification/mark-all-read'
*/
export const markAllRead = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAllRead.url(args, options),
    method: 'post',
})

markAllRead.definition = {
    methods: ["post"],
    url: '/{lang?}/notification/mark-all-read',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NotificationController::markAllRead
* @see app/Http/Controllers/NotificationController.php:25
* @param lang - Default: '$lang'
* @route '/{lang?}/notification/mark-all-read'
*/
markAllRead.url = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return markAllRead.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::markAllRead
* @see app/Http/Controllers/NotificationController.php:25
* @param lang - Default: '$lang'
* @route '/{lang?}/notification/mark-all-read'
*/
markAllRead.post = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAllRead.url(args, options),
    method: 'post',
})

const notification = {
    markAsRead: Object.assign(markAsRead, markAsRead),
    markAllRead: Object.assign(markAllRead, markAllRead),
}

export default notification