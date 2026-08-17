import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../wayfinder'
/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:20
* @route '/{lang}/register'
*/
export const register = (args: { lang: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(args, options),
    method: 'post',
})

register.definition = {
    methods: ["post"],
    url: '/{lang}/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:20
* @route '/{lang}/register'
*/
register.url = (args: { lang: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { lang: args }
    }

    if (Array.isArray(args)) {
        args = {
            lang: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        lang: args.lang,
    }

    return register.definition.url
            .replace('{lang}', parsedArgs.lang.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:20
* @route '/{lang}/register'
*/
register.post = (args: { lang: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:28
* @route '/{lang}/login'
*/
export const login = (args: { lang: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(args, options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/{lang}/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:28
* @route '/{lang}/login'
*/
login.url = (args: { lang: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { lang: args }
    }

    if (Array.isArray(args)) {
        args = {
            lang: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        lang: args.lang,
    }

    return login.definition.url
            .replace('{lang}', parsedArgs.lang.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:28
* @route '/{lang}/login'
*/
login.post = (args: { lang: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:39
* @route '/{lang}/logout'
*/
export const logout = (args: { lang: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(args, options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/{lang}/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:39
* @route '/{lang}/logout'
*/
logout.url = (args: { lang: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { lang: args }
    }

    if (Array.isArray(args)) {
        args = {
            lang: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        lang: args.lang,
    }

    return logout.definition.url
            .replace('{lang}', parsedArgs.lang.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:39
* @route '/{lang}/logout'
*/
logout.post = (args: { lang: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GoogleController::redirect
* @see app/Http/Controllers/GoogleController.php:13
* @route '/{lang}/google/redirect'
*/
export const redirect = (args: { lang: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirect.url(args, options),
    method: 'get',
})

redirect.definition = {
    methods: ["get","head"],
    url: '/{lang}/google/redirect',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GoogleController::redirect
* @see app/Http/Controllers/GoogleController.php:13
* @route '/{lang}/google/redirect'
*/
redirect.url = (args: { lang: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { lang: args }
    }

    if (Array.isArray(args)) {
        args = {
            lang: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        lang: args.lang,
    }

    return redirect.definition.url
            .replace('{lang}', parsedArgs.lang.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GoogleController::redirect
* @see app/Http/Controllers/GoogleController.php:13
* @route '/{lang}/google/redirect'
*/
redirect.get = (args: { lang: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirect.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GoogleController::redirect
* @see app/Http/Controllers/GoogleController.php:13
* @route '/{lang}/google/redirect'
*/
redirect.head = (args: { lang: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: redirect.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GoogleController::callback
* @see app/Http/Controllers/GoogleController.php:18
* @route '/{lang}/google/callback'
*/
export const callback = (args: { lang: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: callback.url(args, options),
    method: 'get',
})

callback.definition = {
    methods: ["get","head"],
    url: '/{lang}/google/callback',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GoogleController::callback
* @see app/Http/Controllers/GoogleController.php:18
* @route '/{lang}/google/callback'
*/
callback.url = (args: { lang: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { lang: args }
    }

    if (Array.isArray(args)) {
        args = {
            lang: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        lang: args.lang,
    }

    return callback.definition.url
            .replace('{lang}', parsedArgs.lang.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GoogleController::callback
* @see app/Http/Controllers/GoogleController.php:18
* @route '/{lang}/google/callback'
*/
callback.get = (args: { lang: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: callback.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GoogleController::callback
* @see app/Http/Controllers/GoogleController.php:18
* @route '/{lang}/google/callback'
*/
callback.head = (args: { lang: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: callback.url(args, options),
    method: 'head',
})

