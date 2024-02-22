import { defineConfig } from 'cypress';

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: 'https://parabank.parasoft.com';
      defaultCommandTimeout: 10000;
    },
  },
});
