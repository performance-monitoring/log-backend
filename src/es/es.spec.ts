import { search, createIndices } from './index'
import signale = require('signale')

describe('test elasticsearch', () => {
  test('search', () => {
    // search()
  })

  test('createIndices', () => {
    createIndices({
      index: 'logstore'
    }).catch((e) => {
      signale.log(e)
    })
  })
})