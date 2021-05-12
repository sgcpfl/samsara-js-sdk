# samsara-js-sdk
Unofficial auto generated typescript/js sdk for samsara.com api

## Version
Generated from [https://github.com/samsarahq/api-docs/tree/6501a6842f19b7c172f74ef96e0c8a11352b6927](https://github.com/samsarahq/api-docs/tree/6501a6842f19b7c172f74ef96e0c8a11352b6927)

## Docs
[https://sgcpfl.github.io/samsara-js-sdk](https://sgcpfl.github.io/samsara-js-sdk)

## Install
With `yarn`:  
`yarn add axios samsara-js-sdk`

With `npm`:  
`npm install axios samsara-js-sdk`

### Configuration
Generated client is extremely verbose, highly recommend using a build tool that supports tree-shaking.

### Usage
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
