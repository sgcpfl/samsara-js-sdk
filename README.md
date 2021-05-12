# samsara-js-sdk
Experimental and unofficial auto generated typescript/js sdk for samsara.com api.

## Docs
[https://sgcpfl.github.io/samsara-js-sdk](https://sgcpfl.github.io/samsara-js-sdk)


## Configuration
Generated client is **extremely** verbose - it is highly recommend to utilize a build tool that supports tree-shaking.

This client depends on a `fetch` compatabile api, for browser this is built in, for nodejs [node-fetch](https://www.npmjs.com/package/node-fetch) can be used.

```js
  import { Configuration } from 'samsara-js-sdk'
  import fetch from 'node-fetch'

  const config = new Configuration({
    fetchApi: fetch, // Not necessary in browser
    headers: {
      'Authorization': 'Bearer samsara_api_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    }
  })
```

## Usage
```js
import { AddressesApi, Configuration } from 'samsara-js-sdk'

const config = new Configuration({
  headers: {
    'Authorization': 'Bearer samsara_api_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  }
})

const api = new AddressesApi(config)

api.listAddresses({
  limit: 10
}).then((response) => {
  console.log(`Look addresses!`)
  console.log(response)
})
```

## Version
Generated from [https://github.com/samsarahq/api-docs/tree/930b673defa672485820380fbad362fb00de0056](https://github.com/samsarahq/api-docs/tree/930b673defa672485820380fbad362fb00de0056)
