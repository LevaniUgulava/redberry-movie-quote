import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../wayfinder'
/**
* @see routes/web/landing.php:7
* @route '/'
*/
export const landing = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: landing.url(options),
    method: 'get',
})

landing.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web/landing.php:7
* @route '/'
*/
landing.url = (options?: RouteQueryOptions) => {
    return landing.definition.url + queryParams(options)
}

/**
* @see routes/web/landing.php:7
* @route '/'
*/
landing.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: landing.url(options),
    method: 'get',
})

/**
* @see routes/web/landing.php:7
* @route '/'
*/
landing.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: landing.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:20
* @route '/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

register.definition = {
    methods: ["post"],
    url: '/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:20
* @route '/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:20
* @route '/register'
*/
register.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:28
* @route '/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:28
* @route '/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:28
* @route '/login'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GoogleController::redirect
* @see app/Http/Controllers/GoogleController.php:13
* @route '/google/redirect'
*/
export const redirect = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirect.url(options),
    method: 'get',
})

redirect.definition = {
    methods: ["get","head"],
    url: '/google/redirect',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GoogleController::redirect
* @see app/Http/Controllers/GoogleController.php:13
* @route '/google/redirect'
*/
redirect.url = (options?: RouteQueryOptions) => {
    return redirect.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GoogleController::redirect
* @see app/Http/Controllers/GoogleController.php:13
* @route '/google/redirect'
*/
redirect.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirect.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GoogleController::redirect
* @see app/Http/Controllers/GoogleController.php:13
* @route '/google/redirect'
*/
redirect.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: redirect.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GoogleController::callback
* @see app/Http/Controllers/GoogleController.php:18
* @route '/google/callback'
*/
export const callback = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: callback.url(options),
    method: 'get',
})

callback.definition = {
    methods: ["get","head"],
    url: '/google/callback',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GoogleController::callback
* @see app/Http/Controllers/GoogleController.php:18
* @route '/google/callback'
*/
callback.url = (options?: RouteQueryOptions) => {
    return callback.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GoogleController::callback
* @see app/Http/Controllers/GoogleController.php:18
* @route '/google/callback'
*/
callback.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: callback.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GoogleController::callback
* @see app/Http/Controllers/GoogleController.php:18
* @route '/google/callback'
*/
callback.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: callback.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:39
* @route '/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:39
* @route '/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:39
* @route '/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

