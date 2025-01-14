export default defineNuxtConfig({
    css: [
        "@/assets/core.scss",
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => ['x-flex', 'x-flex-section'].includes(tag),
        }
    },
    app: {
        head: {
            title: 'Unishadow',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Computer Science student and software developer from the United Kingdom.' },
                { hid: 'og:site_name', property: 'og:site_name', content: 'Unishadow' },
                { hid: 'og:locale', property: 'og:locale', content: 'en_GB' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:url', property: 'og:url', content: 'https://unishadow.me/' },
                { hid: 'og:image', property: 'og:image', content: 'https://unishadow.me/img/robot.png' },
                { hid: "twitter:card", name: "twitter:card", content: "summary" },
                { hid: "twitter:domain", property: "twitter:domain", content: "" },
                { hid: "twitter:url", property: "twitter:url", content: "https://unishadow.me/" },
                { hid: "twitter:title", name: "twitter:title", content: "Unishadow" },
                { hid: "twitter:description", name: "twitter:description", content: "Computer Science student and software developer from the United Kingdom." },
                { hid: "twitter:image", name: "twitter:image", content: "https://unishadow.me/img/robot.png" }
            ],
            link: [
                { rel: 'shortcut icon', type: 'image/png', href: '/img/robot.png' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@100;200;300;400;500;600;700;800;900&display=swap' },
                { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@100;200;300;400;500;600;700;800;900&display=swap' }
            ]
        },
    }
});
