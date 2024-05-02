
module.exports = {
  seo: {
  "title": "FastStore-Isita",
  "description": "A fast and performant store framework",
  "titleTemplate": "%s | FastStore",
  "author": "FastStore"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "isita",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "MXN",
      symbol: "$",
    },
    locale: "es-MX",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "MEX",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://isita.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/pinturas",
    search: "/s?q=Berel",
    pdp: "/kalostone/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/kalostone/p",
      collection: "/pinturas",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/kalostone/p",
      collection: "/pinturas",
      collection_filtered: "/pinturas/?category-1=pinturas&brand=Berel&facets=category-1%2Cbrand%27",
      search: "/s?q=Berel",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "GTM-1234567",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://isita.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
