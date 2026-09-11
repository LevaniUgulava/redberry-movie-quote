import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PasswordResetController::forgetPassword
* @see app/Http/Controllers/PasswordResetController.php:28
* @param lang - Default: '$lang'
* @route '/{lang?}/forgot-password'
*/
export const forgetPassword = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: forgetPassword.url(args, options),
    method: 'post',
})

forgetPassword.definition = {
    methods: ["post"],
    url: '/{lang?}/forgot-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PasswordResetController::forgetPassword
* @see app/Http/Controllers/PasswordResetController.php:28
* @param lang - Default: '$lang'
* @route '/{lang?}/forgot-password'
*/
forgetPassword.url = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return forgetPassword.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PasswordResetController::forgetPassword
* @see app/Http/Controllers/PasswordResetController.php:28
* @param lang - Default: '$lang'
* @route '/{lang?}/forgot-password'
*/
forgetPassword.post = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: forgetPassword.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PasswordResetController::resetPassword
* @see app/Http/Controllers/PasswordResetController.php:42
* @param lang - Default: '$lang'
* @route '/{lang?}/reset-password'
*/
export const resetPassword = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resetPassword.url(args, options),
    method: 'post',
})

resetPassword.definition = {
    methods: ["post"],
    url: '/{lang?}/reset-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PasswordResetController::resetPassword
* @see app/Http/Controllers/PasswordResetController.php:42
* @param lang - Default: '$lang'
* @route '/{lang?}/reset-password'
*/
resetPassword.url = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return resetPassword.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PasswordResetController::resetPassword
* @see app/Http/Controllers/PasswordResetController.php:42
* @param lang - Default: '$lang'
* @route '/{lang?}/reset-password'
*/
resetPassword.post = (args?: { lang?: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resetPassword.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PasswordResetController::redirectToReset
* @see app/Http/Controllers/PasswordResetController.php:22
* @param lang - Default: '$lang'
* @route '/{lang?}/reset-password/{token}/{email}'
*/
export const redirectToReset = (args: { lang?: string | number, token: string | number, email: string | number } | [lang: string | number, token: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirectToReset.url(args, options),
    method: 'get',
})

redirectToReset.definition = {
    methods: ["get","head"],
    url: '/{lang?}/reset-password/{token}/{email}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PasswordResetController::redirectToReset
* @see app/Http/Controllers/PasswordResetController.php:22
* @param lang - Default: '$lang'
* @route '/{lang?}/reset-password/{token}/{email}'
*/
redirectToReset.url = (args: { lang?: string | number, token: string | number, email: string | number } | [lang: string | number, token: string | number, email: string | number ], options?: RouteQueryOptions) => {
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

    return redirectToReset.definition.url
            .replace('{lang?}', parsedArgs.lang?.toString() ?? '')
            .replace('{token}', parsedArgs.token.toString())
            .replace('{email}', parsedArgs.email.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PasswordResetController::redirectToReset
* @see app/Http/Controllers/PasswordResetController.php:22
* @param lang - Default: '$lang'
* @route '/{lang?}/reset-password/{token}/{email}'
*/
redirectToReset.get = (args: { lang?: string | number, token: string | number, email: string | number } | [lang: string | number, token: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirectToReset.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PasswordResetController::redirectToReset
* @see app/Http/Controllers/PasswordResetController.php:22
* @param lang - Default: '$lang'
* @route '/{lang?}/reset-password/{token}/{email}'
*/
redirectToReset.head = (args: { lang?: string | number, token: string | number, email: string | number } | [lang: string | number, token: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: redirectToReset.url(args, options),
    method: 'head',
})

const PasswordResetController = { forgetPassword, resetPassword, redirectToReset }

export default PasswordResetController