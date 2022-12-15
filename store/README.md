# STORE

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your Vuex Store files.
Vuex Store option is implemented in the Nuxt.js framework.

Creating a file in this directory automatically activates the option in the framework.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/vuex-store).

## Ghent Demo hints:

---
**List current citizens in in-memory database:**

https://integrations.walt-test.cloud/ghent/citizens/list

---

**Upload citizen data:**
* Populate data in ghent-citizens.json
* POST data using curl:

`curl -X POST https://integrations.walt-test.cloud/ghent/citizens/put -d @ghent-citizens.json`

**Frontend**

* Checkout project: https://github.com/walt-id/ghent-energy-portal
* Make sure to set proxy in `nuxt.config.js` like this:
```
proxy: {
    '/issuer-api/': 'https://wallet.walt-test.cloud',
    '/onboarding-api/': 'https://wallet.walt-test.cloud',
    '/api/': 'https://wallet.walt-test.cloud',
    '/ghent/': 'https://integrations.walt-test.cloud'
  }
```
* Build:
```
yarn install
yarn dev
```
