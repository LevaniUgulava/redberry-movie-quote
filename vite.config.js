import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import { bunny } from "laravel-vite-plugin/fonts";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import inertia from "@inertiajs/vite";
import path from "path";
import { wayfinder } from "@laravel/vite-plugin-wayfinder";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.tsx"],
            refresh: true,
            fonts: [
                bunny("Instrument Sans", {
                    weights: [400, 500, 600],
                }),
            ],
        }),
        react(),
        inertia(),
        tailwindcss(),
        wayfinder(),
    ],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: path.resolve(import.meta.dirname, "resources/js"),
            },
        ],
    },
    server: {
        watch: {
            ignored: ["**/storage/framework/views/**"],
        },
    },
});
