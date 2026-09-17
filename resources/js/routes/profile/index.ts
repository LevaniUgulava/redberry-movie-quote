import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ProfileController::edit
* @see app/Http/Controllers/ProfileController.php:19
* @param lang - Default: '$lang'
* @route '/{lang?}/profile'
*/
export const edit = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/{lang?}/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProfileController::edit
* @see app/Http/Controllers/ProfileController.php:19
* @param lang - Default: '$lang'
* @route '/{lang?}/profile'
*/
edit.url = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProfileController::edit
* @see app/Http/Controllers/ProfileController.php:19
* @param lang - Default: '$lang'
* @route '/{lang?}/profile'
*/
edit.get = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProfileController::edit
* @see app/Http/Controllers/ProfileController.php:19
* @param lang - Default: '$lang'
* @route '/{lang?}/profile'
*/
edit.head = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProfileController::update
* @see app/Http/Controllers/ProfileController.php:26
* @param lang - Default: '$lang'
* @route '/{lang?}/profile/update'
*/
export const update = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/{lang?}/profile/update',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\ProfileController::update
* @see app/Http/Controllers/ProfileController.php:26
* @param lang - Default: '$lang'
* @route '/{lang?}/profile/update'
*/
update.url = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProfileController::update
* @see app/Http/Controllers/ProfileController.php:26
* @param lang - Default: '$lang'
* @route '/{lang?}/profile/update'
*/
update.patch = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

const profile = {
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
}

export default profile