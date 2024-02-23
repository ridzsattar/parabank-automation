import { defineConfig } from 'cypress';

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://parabank.parasoft.com',
    defaultCommandTimeout: 10000,
  },
});
