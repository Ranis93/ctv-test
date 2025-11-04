// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,

  css: [
    '~/assets/css/reset.css',
    '~/assets/css/fonts.css',
    '~/assets/css/main.css',
  ],
  modules: [
    '@pinia/nuxt',
    'nuxt-tiptap-editor'
  ],
  
  tiptap: {
    // Опциональные настройки
    lowlight: {
      // Настройки подсветки синтаксиса
    }
  },
  nitro: {
    routeRules: {
      "/api/**": { proxy: "https://naukatv.ru/api/**"},
    }
  },
  app: {
    head: {
      link: [
        // Preload для критических шрифтов
        {
          rel: 'preload',
          href: '/_nuxt/assets/fonts/FuturaPT/FuturaPT-Book.ttf',
          as: 'font',
          type: 'font/ttf',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/_nuxt/assets/fonts/SourceSans3/static/SourceSans3-Regular.ttf',
          as: 'font',
          type: 'font/ttf',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/_nuxt/assets/fonts/SourceSans3/static/SourceSans3-Bold.ttf',
          as: 'font',
          type: 'font/ttf',
          crossorigin: 'anonymous'
        }
      ]
    }
  },
  vite: {
		css: {
			preprocessorOptions: {
        scss: {
            silenceDeprecations: ['import'],
            additionalData: `
            @import "@/assets/scss/_variables.scss";
            @import "@/assets/scss/_mixins.scss";
          `
        },
			},
		},
	},
})
