import * as api from 'amazon-product-api'


interface IQuery {
  func: string,
  query: any,
  resolve: (result) => void,
  reject: (error) => void,
}

/**
 * ItemSearch Query
 * http://docs.aws.amazon.com/ko_kr/AWSECommerceService/latest/DG/ItemSearch.html
 */
export interface IitemSearchQuery {
  /**
   * Actor name associated with the item. You can enter all or part of the name.
   * Type: String
   * Default: None
   */
  actor?: string

  /**
   * Artist name associated with the item. You can enter all or part of the name.
   * Type: String
   * Default: None
   */
  artist?: string

  /**
   * Movie ratings based on MPAA ratings or age, depending on locale. You can specify one or more values in a comma-separated list in a REST request or with multiple elements in a SOAP request.
   * Type: String
   * Default: None
   * Valid values: See Movie Ratings by Locale.
   */
  audienceRating?: string

  /**
   * Author name associated with the item. You can enter all or part of the name.
   * Type: String
   * Default: None
   */
  author?: string
  
  /**
   * Returns available items only. This parameter must be used with the Condition parameter. When Availability is set to Available, the Condition parameter cannot be set to New.
   * For more information, see Availability Parameter.
   * Type: String
   * Default: None
   * Valid values: Available
   */
  Availability?: string

  /**
   * Brand name associated with the item. You can enter all or part of the name.
   * Type: String
   * Default: None
   */
  Brand?: string

  /**
   * Browse nodes are numbers that identify product categories. For example, the browse node for Literature & Fiction is 17, while the browse node for Outdoors & Nature is 290060.
   * BrowseNode can be used with every index, except All and Blended.
   * Type: String
   * Default: None
   * Valid values: Positive integer
   */
  BrowseNode?: string

  /**
   * Composer name associated with the item. You can enter all or part of the name.
   * Type: String
   * Default: None
   */
  Composer?: string

  /**
   * The Condition parameter filters offers by condition type. By default, Condition equals New. When the Availability parameter is set to Available, the Condition parameter cannot be set to New.
   * When Condition is set to All, ItemSearch returns one offer per condition.
   * Condition can be used with every index, except All and Blended.
   * Type: String
   * Default: New
   * Valid values: New | Used | Collectible | Refurbished | All
   */
  Condition?: string

  /**
   * Conductor name associated with the item. You can enter all or part of the name.
   * Type: String
   * Default: None
   */
  Conductor?: string

  /**
   * Director name associated with the item. You can enter all or part of the name.
   * Type: String
   * Default: None
   */
  Director?: string

  /**
   * Returns the reviews summary URL.
   * Type: Boolean
   * Default: True
   * Valid values: True | False
   */
  IncludeReviewsSummary?: boolean

  /**
   * Returns a specific page of items from the available search results. Up to ten items are returned per page.
   * If you do not include ItemPage in your request, the first page is returned. The total number of pages found is returned in the TotalPages response element.
   * If Condition is set to All, ItemSearch returns additional offers for those items, one offer per condition type.
   * Valid values: 1 to 10 (1 to 5 when search index is All)
   * Type: String
   * Default: None
   */
  ItemPage?: string

  /**
   * A word or phrase that describes an item, including author, artist, description, manufacturer, title, and so on.
   * For example, when SearchIndex is set to MusicTracks, the Keywords parameter can search for song title. Spaces must be URL-encoded as %20.
   * Keywords can be used with all search indices.
   * Type: String
   * Default: None
   */
  Keywords?: string

  /**
   * Manufacturer name associated with the item. You can enter all or part of the name.
   * Type: String
   * Default: None
   */
  Manufacturer?: string

  /**
   * Specifies the maximum item price in the response. Prices appear in the lowest currency denomination. For example, 3241 is $32.41.
   * MaximumPrice can be used with every index, except All and Blended.
   * Type: String
   * Default: None
   * Valid values: Positive integer
   */
  MaximumPrice?: string

  /**
   * Specifies the minimum percentage off the item price.
   * Type: String
   * Default: None
   * Valid values: Positive integer
   */
  MinPercentageOff?: string

  /**
   * Orchestra name associated with the item. You can enter all or part of the name.
   * Type: String
   * Default: None
   */
  Orchestra?: string

  /**
   * Performs a book search with a complex query string. The parameter can be used only when SearchIndex is set to Books.
   * Valid values: See Power Searches.
   * Type: String
   * Default: None
   */
  Power?: string

  /**
   * Publisher name associated with the item. You can enter all or part of the name.
   * Type: String
   * Default: None
   */
  Publisher?: string

  /**
   * Returns a specific page of related items from the available search results. Up to ten items are returned per page. This parameter can be used with the RelatedItems response group.
   * For example, when RelatedItemPage is set to 2, the second set is returned.
   * Type: String
   * Default: None
   */
  RelatedItemPage?: string

  /**
   * Returns the relationship between associated items. Example values include Episode, Season, and Tracks.
   * Constraint: Required when RelatedItems response group is used.
   * Type: String
   * Default: None
   * Valid values: See Related Items.
   */
  RelationshipType?: string

  /**
   * The product category to search. Some ItemSearch parameters are valid only with specific values of SearchIndex.
   * Type: String
   * Default: None
   * Valid values: A search index, such as Apparel, Beauty, Blended, Books, and so on.
   * For a complete list of search indices, see Locale Reference for the Product Advertising API.
   */
  SearchIndex: string
  
  /**
   * The way in which items in the response are ordered.
   * Type: String
   * Default: None
   * Valid values: Values vary by search index.
   * For a list of valid values, see Locale Reference for the Product Advertising API.
   */
  Sort?: string

  /**
   * Title associated with the item. You can enter all or part of the title. Title searches are a subset of Keyword searches. Use a Keywords search if a Title search does not return the items you want.
   * Title can be used with every index, except All and Blended.
   * Type: String
   * Default: None
   */
  Title?: string

  /**
   * By default, reviews are truncated to 1000 characters. Choose a value to specify a length. To return the entire review, use 0 .
   * Type: Integer
   * Default: 1000
   * Constraints: Must be a positive integer or 0.
   */
  TruncateReviewsAt?: number

  /**
   * Returns a specific page of variations. For example, set VariationPage to 2 to return offers 11 to 20 . The total number of pages appears in the TotalPages element.
   * Type: String
   * Default: None
   * Valid values: Positive integer
   */
  VariationPage?: string

  /**
   * Specifies the types of values to return. Separate multiple response groups with commas.
   * Type: String
   * Default: Small
   * Valid values: See Response Groups.
   */
  ResponseGroup?: string
}


export class AmazonProductAdvertising {
  private _client: api.IAmazonProductClient
  private _queries: IQuery[] = []
  private _started: boolean = false
  private _timerId: number = null
  private _interval: number = 1000

  constructor({
    awsId,
    awsSecret,
    awsTag,
  }: {
    awsId: string,
    awsSecret: string,
    awsTag: string,
  }) {
    this._client = api.createClient({
      awsId,
      awsSecret,
      awsTag,
    })
  }

  /**
   * Item search
   * http://docs.aws.amazon.com/ko_kr/AWSECommerceService/latest/DG/ItemSearch.html
   * @param query Item search query
   */
  itemSearch(query: IitemSearchQuery): Promise<Object[]> {
    return this._newPromise('itemSearch', query)
  }

  browseNodeLookup(query: any): Promise<Object[]> {
    return this._newPromise('browseNodeLookup', query)
  }

  start(interval: number) {
    this._interval = interval
    if(!this._started) {
      this._process()
    }
  }

  stop() {
    clearTimeout(this._timerId)
    this._timerId = null
  }

  private _newPromise(func: string, query: any) {
    return new Promise<Object[]>((resolve, reject) => {
      this._queries.push({
        func,
        query,
        resolve,
        reject,
      })
      this.start(this._interval)
    })
  }

  private _process() {
    this._started = true
    const query = this._queries[0]
    if(query) {
      this._client[query.func](query.query, (err, result) => {
        if(err) {
          if(err['$'] && err['$']['xmlns'] === 'http://ecs.amazonaws.com/doc/2013-08-01/') {
            if(err['Error'][0]['Code'][0] === 'RequestThrottled') {
              console.log('Error: "RequestThrottled"')
              console.log('function: ', query.func, 'query: ', query.query)
              this._timerId = setTimeout(this._process.bind(this), this._interval)
              return
            }
          }
          this._queries.shift()
          query.reject(err)
          return
        }
        this._queries.shift()
        query.resolve(result)
        setTimeout(this._process.bind(this), this._interval)
      })
    } else {
      this._started = false
    }
  }
}