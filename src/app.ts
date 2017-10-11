/**
 * app.ts
 */

// import * as api from 'amazon-product-api'
import {
  AmazonProductAdvertising,
} from './amazon-product-advertising-api'
import {
  credentials,
} from './config'

const client = new AmazonProductAdvertising(credentials)

// async function itemSearch() {
//   try {
//     const results = await client.itemSearch({
//       director: 'Quentin Tarantino',
//       actor: 'Samuel L. Jackson',
//       searchIndex: 'DVD',
//       audienceRating: 'R',
//       responseGroup: 'ItemAttributes, Offers, Images',
//     })
//     console.log(JSON.stringify(results[0], null, 2))
//   } catch(err) {
//     console.log(err)
//     console.log(err[0].Error[0])
//     // console.log(err.Error[0].Code)
//     // console.log(err.Error[0].Message)
//   }
// }

async function browseNodeLookup(browseNodeId: string) {
  const results = await client.browseNodeLookup({
    browseNodeId,
    responseGroup: 'NewReleases,BrowseNodeInfo',
  })
  console.log('BrowseNodeId: ', results[0]['BrowseNodeId'])
  console.log('Name: ', results[0]['Name'])
  console.log('--------------------------')
  if(results[0]['Children'] && results[0]['Children'][0]['BrowseNode'].length !== 0) {
    const children: Array<any> = results[0]['Children'][0]['BrowseNode']
    const browseNodeIds = children.map(child => {
      return child['BrowseNodeId']
    })
    await Promise.all(browseNodeIds.map(id => browseNodeLookup(id)))
  }
}

browseNodeLookup('165795011')
.then(() => {
  console.log('------------- end ---------------')
}).catch(err => {
  console.log(JSON.stringify(err))
})
client.start(3000)