import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PasswordResetController::email
* @see app/Http/Controllers/PasswordResetController.php:28
* @route '/forgot-password'
*/
export const email = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: email.url(options),
    method: 'post',
})

email.definition = {
    methods: ["post"],
    url: '/forgot-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PasswordResetController::email
* @see app/Http/Controllers/PasswordResetController.php:28
* @route '/forgot-password'
*/
email.url = (options?: RouteQueryOptions) => {
    return email.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PasswordResetController::email
* @see app/Http/Controllers/PasswordResetController.php:28
* @route '/forgot-password'
*/
email.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: email.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PasswordResetController::update
* @see app/Http/Controllers/PasswordResetController.php:37
* @route '/reset-password'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/reset-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PasswordResetController::update
* @see app/Http/Controllers/PasswordResetController.php:37
* @route '/reset-password'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PasswordResetController::update
* @see app/Http/Controllers/PasswordResetController.php:37
* @route '/reset-password'
*/
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PasswordResetController::reset
* @see app/Http/Controllers/PasswordResetController.php:22
* @route '/reset-password/{token}/{email}'
*/
export const reset = (args: { token: string | number, email: string | number } | [token: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reset.url(args, options),
    method: 'get',
})

reset.definition = {
    methods: ["get","head"],
    url: '/reset-password/{token}/{email}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PasswordResetController::reset
* @see app/Http/Controllers/PasswordResetController.php:22
* @route '/reset-password/{token}/{email}'
*/
reset.url = (args: { token: string | number, email: string | number } | [token: string | number, email: string | number ], options?: RouteQueryOptions) => {
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

    return reset.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace('{email}', parsedArgs.email.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PasswordResetController::reset
* @see app/Http/Controllers/PasswordResetController.php:22
* @route '/reset-password/{token}/{email}'
*/
reset.get = (args: { token: string | number, email: string | number } | [token: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reset.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PasswordResetController::reset
* @see app/Http/Controllers/PasswordResetController.php:22
* @route '/reset-password/{token}/{email}'
*/
reset.head = (args: { token: string | number, email: string | number } | [token: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: reset.url(args, options),
    method: 'head',
})

const password = {
    email: Object.assign(email, email),
    update: Object.assign(update, update),
    reset: Object.assign(reset, reset),
}

export default password