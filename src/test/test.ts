/**
 * Test
 */

import {expect} from 'chai'
import {
  AmazonProductAdvertising,
} from '../amazon-product-advertising-api'
import {
  credentials,
} from '../config'

describe('test', function() {
  this.timeout(10000)

  const client = new AmazonProductAdvertising(credentials)

  it('itemSearch', async () => {
    const results = await client.itemSearch({
      director: 'Quentin Tarantino',
      actor: 'Samuel L. Jackson',
      searchIndex: 'DVD',
      audienceRating: 'R',
      responseGroup: 'ItemAttributes,Offers,Images',
    })
    expect(results).to.be.ok
    // console.log(JSON.stringify(results, null, 2))
  })

  it('browseNodeLookup', async () => {
    const results = await client.browseNodeLookup({
      browseNodeId: '549726',
      responseGroup: 'NewReleases',
    })
    expect(results).to.be.ok
    // console.log(JSON.stringify(results, null, 2))
  })

  it('itemLookup', async () => {
    const results = await client.itemLookup({
      idType: 'UPC',
      itemId: '635753490879',
      responseGroup: 'ItemAttributes,Offers,Images',
    })
    expect(results).to.be.ok
    // console.log(JSON.stringify(results, null, 2))
  })

  it('similarityLookup', async () => {
    const results = await client.similarityLookup({
      itemId: 'B073QJNXL2',
      responseGroup: 'Request,Small',
    })
    console.log(JSON.stringify(results, null, 2))
  })

  it('catch error', async () => {
    try {
      let results = await client.itemSearch({
        keywords: 'lego',
        searchIndex: 'Toys',
        // responseGroup: 'ItemIds',
        responseGroup: 'Foobar',
      })
      expect(true).to.be.not.ok
    } catch(err) {
      // console.log(JSON.stringify(err, null, 2))
    }
  })

  it('after error, request again', async () => {
    const results = await client.itemSearch({
      director: 'Quentin Tarantino',
      actor: 'Samuel L. Jackson',
      searchIndex: 'DVD',
      audienceRating: 'R',
      responseGroup: 'ItemAttributes,Offers,Images',
    })
    expect(results).to.be.ok
  })
})
