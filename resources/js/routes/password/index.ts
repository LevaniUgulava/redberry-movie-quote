import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PasswordResetController::email
* @see app/Http/Controllers/PasswordResetController.php:28
* @param lang - Default: '$lang'
* @route '/{lang?}/forgot-password'
*/
export const email = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: email.url(args, options),
    method: 'post',
})

email.definition = {
    methods: ["post"],
    url: '/{lang?}/forgot-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PasswordResetController::email
* @see app/Http/Controllers/PasswordResetController.php:28
* @param lang - Default: '$lang'
* @route '/{lang?}/forgot-password'
*/
email.url = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return email.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PasswordResetController::email
* @see app/Http/Controllers/PasswordResetController.php:28
* @param lang - Default: '$lang'
* @route '/{lang?}/forgot-password'
*/
email.post = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: email.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PasswordResetController::update
* @see app/Http/Controllers/PasswordResetController.php:37
* @param lang - Default: '$lang'
* @route '/{lang?}/reset-password'
*/
export const update = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/{lang?}/reset-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PasswordResetController::update
* @see app/Http/Controllers/PasswordResetController.php:37
* @param lang - Default: '$lang'
* @route '/{lang?}/reset-password'
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
* @see \App\Http\Controllers\PasswordResetController::update
* @see app/Http/Controllers/PasswordResetController.php:37
* @param lang - Default: '$lang'
* @route '/{lang?}/reset-password'
*/
update.post = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PasswordResetController::reset
* @see app/Http/Controllers/PasswordResetController.php:22
* @param lang - Default: '$lang'
* @route '/{lang?}/reset-password/{token}/{email}'
*/
export const reset = (args: { lang?: string | number, token: string | number, email: string | number } | [lang: string | number, token: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reset.url(args, options),
    method: 'get',
})

reset.definition = {
    methods: ["get","head"],
    url: '/{lang?}/reset-password/{token}/{email}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PasswordResetController::reset
* @see app/Http/Controllers/PasswordResetController.php:22
* @param lang - Default: '$lang'
* @route '/{lang?}/reset-password/{token}/{email}'
*/
reset.url = (args: { lang?: string | number, token: string | number, email: string | number } | [lang: string | number, token: string | number, email: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            lang: args[0],
            token: args[1],
            email: args[2],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "lang",
    ])

    const parsedArgs = {
        lang: args.lang ?? '$lang',
        token: args.token,
        email: args.email,
    }

    return reset.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace('{token}', parsedArgs.token.toString())
            .replace('{email}', parsedArgs.email.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PasswordResetController::reset
* @see app/Http/Controllers/PasswordResetController.php:22
* @param lang - Default: '$lang'
* @route '/{lang?}/reset-password/{token}/{email}'
*/
reset.get = (args: { lang?: string | number, token: string | number, email: string | number } | [lang: string | number, token: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reset.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PasswordResetController::reset
* @see app/Http/Controllers/PasswordResetController.php:22
* @param lang - Default: '$lang'
* @route '/{lang?}/reset-password/{token}/{email}'
*/
reset.head = (args: { lang?: string | number, token: string | number, email: string | number } | [lang: string | number, token: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: reset.url(args, options),
    method: 'head',
})

const password = {
    email: Object.assign(email, email),
    update: Object.assign(update, update),
    reset: Object.assign(reset, reset),
}

export default password