import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AuthController::resend
* @see app/Http/Controllers/AuthController.php:57
* @route '/{lang}/resend'
*/
export const resend = (args: { lang: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resend.url(args, options),
    method: 'post',
})

resend.definition = {
    methods: ["post"],
    url: '/{lang}/resend',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::resend
* @see app/Http/Controllers/AuthController.php:57
* @route '/{lang}/resend'
*/
resend.url = (args: { lang: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return resend.definition.url
            .replace('{lang}', parsedArgs.lang.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::resend
* @see app/Http/Controllers/AuthController.php:57
* @route '/{lang}/resend'
*/
resend.post = (args: { lang: string | number } | [lang: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resend.url(args, options),
    method: 'post',
})

const verify = {
    resend: Object.assign(resend, resend),
}

export default verify