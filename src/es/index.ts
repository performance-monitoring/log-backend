import * as ES from "@elastic/elasticsearch"
import signale = require("signale")
import { Indices } from '../types/es'

const client = new ES.Client({ node: 'http://localhost:9200' })

export const search = () => {
  return client.search({
    index: 'my-index',
    body: {
      query: {
        match: { hello: 'world' }
      }
    }
  }, (err, result) => {
    if (err) {
      signale.log(err)
      signale.log('--------')
    }
    else signale.log(result)
  })
}


export const createIndices = (index: Indices) => {
  return client.indices.create(index)
}