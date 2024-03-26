// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nuxt3.2.2",
      meta: [{ name: "description", content: "Nuxt3.2.2" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
        },
      ],
    },
  },
  runtimeConfig: {
    webBEndURL: process.env.WEB_BEND_URL,
    public: {
      // in case of to share into the public
    },
  },
  // buildDir: "dist",
  ssr: true,
});
