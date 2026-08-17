import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AuthController::verify
* @see app/Http/Controllers/AuthController.php:50
* @route '/{lang}/email/verify/{id}/{hash}'
*/
export const verify = (args: { lang: string | number, id: string | number, hash: string | number } | [lang: string | number, id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verify.url(args, options),
    method: 'get',
})

verify.definition = {
    methods: ["get","head"],
    url: '/{lang}/email/verify/{id}/{hash}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthController::verify
* @see app/Http/Controllers/AuthController.php:50
* @route '/{lang}/email/verify/{id}/{hash}'
*/
verify.url = (args: { lang: string | number, id: string | number, hash: string | number } | [lang: string | number, id: string | number, hash: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            lang: args[0],
            id: args[1],
            hash: args[2],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        lang: args.lang,
        id: args.id,
        hash: args.hash,
    }

    return verify.definition.url
            .replace('{lang}', parsedArgs.lang.toString())
            .replace('{id}', parsedArgs.id.toString())
            .replace('{hash}', parsedArgs.hash.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::verify
* @see app/Http/Controllers/AuthController.php:50
* @route '/{lang}/email/verify/{id}/{hash}'
*/
verify.get = (args: { lang: string | number, id: string | number, hash: string | number } | [lang: string | number, id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verify.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::verify
* @see app/Http/Controllers/AuthController.php:50
* @route '/{lang}/email/verify/{id}/{hash}'
*/
verify.head = (args: { lang: string | number, id: string | number, hash: string | number } | [lang: string | number, id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: verify.url(args, options),
    method: 'head',
})

const verification = {
    verify: Object.assign(verify, verify),
}

export default verification