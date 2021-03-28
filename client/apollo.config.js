// apollo.config.js
module.exports = {
  client: {
    service: {
      name: 'poller',
      // URL to the GraphQL API
      url: 'http://localhost:3030/',
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.ts',
    ],
  },
};
