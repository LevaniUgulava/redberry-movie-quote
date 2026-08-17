import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PasswordResetController::forgetPassword
* @see app/Http/Controllers/PasswordResetController.php:28
* @route '/forgot-password'
*/
export const forgetPassword = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: forgetPassword.url(options),
    method: 'post',
})

forgetPassword.definition = {
    methods: ["post"],
    url: '/forgot-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PasswordResetController::forgetPassword
* @see app/Http/Controllers/PasswordResetController.php:28
* @route '/forgot-password'
*/
forgetPassword.url = (options?: RouteQueryOptions) => {
    return forgetPassword.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PasswordResetController::forgetPassword
* @see app/Http/Controllers/PasswordResetController.php:28
* @route '/forgot-password'
*/
forgetPassword.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: forgetPassword.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PasswordResetController::resetPassword
* @see app/Http/Controllers/PasswordResetController.php:37
* @route '/reset-password'
*/
export const resetPassword = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resetPassword.url(options),
    method: 'post',
})

resetPassword.definition = {
    methods: ["post"],
    url: '/reset-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PasswordResetController::resetPassword
* @see app/Http/Controllers/PasswordResetController.php:37
* @route '/reset-password'
*/
resetPassword.url = (options?: RouteQueryOptions) => {
    return resetPassword.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PasswordResetController::resetPassword
* @see app/Http/Controllers/PasswordResetController.php:37
* @route '/reset-password'
*/
resetPassword.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resetPassword.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PasswordResetController::redirectToReset
* @see app/Http/Controllers/PasswordResetController.php:22
* @route '/reset-password/{token}/{email}'
*/
export const redirectToReset = (args: { token: string | number, email: string | number } | [token: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirectToReset.url(args, options),
    method: 'get',
})

redirectToReset.definition = {
    methods: ["get","head"],
    url: '/reset-password/{token}/{email}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PasswordResetController::redirectToReset
* @see app/Http/Controllers/PasswordResetController.php:22
* @route '/reset-password/{token}/{email}'
*/
redirectToReset.url = (args: { token: string | number, email: string | number } | [token: string | number, email: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            token: args[0],
            email: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
        email: args.email,
    }

    return redirectToReset.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace('{email}', parsedArgs.email.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PasswordResetController::redirectToReset
* @see app/Http/Controllers/PasswordResetController.php:22
* @route '/reset-password/{token}/{email}'
*/
redirectToReset.get = (args: { token: string | number, email: string | number } | [token: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirectToReset.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PasswordResetController::redirectToReset
* @see app/Http/Controllers/PasswordResetController.php:22
* @route '/reset-password/{token}/{email}'
*/
redirectToReset.head = (args: { token: string | number, email: string | number } | [token: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: redirectToReset.url(args, options),
    method: 'head',
})

const PasswordResetController = { forgetPassword, resetPassword, redirectToReset }

export default PasswordResetController