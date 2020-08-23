import * as ES from "@elastic/elasticsearch"

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
    if (err) console.log(err)
  })
}