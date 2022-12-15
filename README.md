# waltid-issuer-portal

## Build Setup

### Using Docker
    docker build -t waltid/ssikit-issuer-portal .

### Using Node (for development)

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

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
