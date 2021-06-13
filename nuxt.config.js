export default {
  ssr: false,
  head: {
    title: 'Nuxt Todo Board',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lora&family=Quicksand:wght@300;400&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css',
      },
    ],
  },
  css: ['styles/main.scss'],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],
  modules: ['@nuxtjs/pwa'],
  build: {},
}
