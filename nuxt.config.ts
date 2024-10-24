import { version as nitroVersion } from '@nuxt/nitro/package.json'

export default {
  components: true,
  ssr: false,
  target: 'static',
  buildModules: [
    '@nuxt/bridge',
    '@nuxtjs/tailwindcss'
  ],
  publicRuntimeConfig: {
    nitroVersion: nitroVersion.split('.').pop()
  },
  env: {
    base: process.env.BASE_URL || 'https://api.mexsonfernandes.com'
  },
  tailwindcss: {
    viewer: false,
  },
  plugins: [
    './plugins/rendertime.server'
  ],
  css: ['~/assets/css/tailwind.css'],
  // build: {
  //   postcss: {
  //     postcssOptions: {
  //       plugins: {
  //         tailwindcss: {},
  //         autoprefixer: {},
  //       },
  //     },
  //   },
  // },
};
