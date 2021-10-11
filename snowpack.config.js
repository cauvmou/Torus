// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    ["scripts"]: {
      url: '/scripts'
    },
    ["app/pages"]: {
      url: '/'
    },
    ["app/public"]: {
      url: '/public'
    },
    ["assets"]: {
      url: '/assets'
    }
  },
  plugins: [
    ['./snowpack-move.js']
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    watch: true
  },
};
