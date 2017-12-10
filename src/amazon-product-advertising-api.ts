import * as api from 'amazon-product-api'


/**
 * Credentials
 */
export interface ICredentials {
  /**
   * Access Key ID
   */
  awsId: string

  /**
   * Secret Key
   */
  awsSecret: string

  /**
   * Store ID
   */
  awsTag: string
}

/**
 * ItemSearch Query
 * http://docs.aws.amazon.com/ko_kr/AWSECommerceService/latest/DG/ItemSearch.html
 */
export interface IItemSearchQuery {
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
  availability?: string

  /**
   * Brand name associated with the item. You can enter all or part of the name.
   * Type: String
   * Default: None
   */
  brand?: string

  /**
   * Browse nodes are numbers that identify product categories. For example, the browse node for Literature & Fiction is 17, while the browse node for Outdoors & Nature is 290060.
   * BrowseNode can be used with every index, except All and Blended.
   * Type: String
   * Default: None
   * Valid values: Positive integer
   */
  browseNode?: string

  /**
   * Composer name associated with the item. You can enter all or part of the name.
   * Type: String
   * Default: None
   */
  composer?: string

  /**
   * The Condition parameter filters offers by condition type. By default, Condition equals New. When the Availability parameter is set to Available, the Condition parameter cannot be set to New.
   * When Condition is set to All, ItemSearch returns one offer per condition.
   * Condition can be used with every index, except All and Blended.
   * Type: String
   * Default: New
   * Valid values: New | Used | Collectible | Refurbished | All
   */
  condition?: string

  /**
   * Conductor name associated with the item. You can enter all or part of the name.
   * Type: String
   * Default: None
   */
  conductor?: string

  /**
   * Director name associated with the item. You can enter all or part of the name.
   * Type: String
   * Default: None
   */
  director?: string

  /**
   * Returns the reviews summary URL.
   * Type: Boolean
   * Default: True
   * Valid values: True | False
   */
  includeReviewsSummary?: boolean

  /**
   * Returns a specific page of items from the available search results. Up to ten items are returned per page.
   * If you do not include ItemPage in your request, the first page is returned. The total number of pages found is returned in the TotalPages response element.
   * If Condition is set to All, ItemSearch returns additional offers for those items, one offer per condition type.
   * Valid values: 1 to 10 (1 to 5 when search index is All)
   * Type: String
   * Default: None
   */
  itemPage?: string

  /**
   * A word or phrase that describes an item, including author, artist, description, manufacturer, title, and so on.
   * For example, when SearchIndex is set to MusicTracks, the Keywords parameter can search for song title. Spaces must be URL-encoded as %20.
   * Keywords can be used with all search indices.
   * Type: String
   * Default: None
   */
  keywords?: string

  /**
   * Manufacturer name associated with the item. You can enter all or part of the name.
   * Type: String
   * Default: None
   */
  manufacturer?: string

  /**
   * Specifies the maximum item price in the response. Prices appear in the lowest currency denomination. For example, 3241 is $32.41.
   * MaximumPrice can be used with every index, except All and Blended.
   * Type: String
   * Default: None
   * Valid values: Positive integer
   */
  maximumPrice?: string

  /**
   * Specifies the minimum percentage off the item price.
   * Type: String
   * Default: None
   * Valid values: Positive integer
   */
  minPercentageOff?: string

  /**
   * Orchestra name associated with the item. You can enter all or part of the name.
   * Type: String
   * Default: None
   */
  orchestra?: string

  /**
   * Performs a book search with a complex query string. The parameter can be used only when SearchIndex is set to Books.
   * Valid values: See Power Searches.
   * Type: String
   * Default: None
   */
  power?: string

  /**
   * Publisher name associated with the item. You can enter all or part of the name.
   * Type: String
   * Default: None
   */
  publisher?: string

  /**
   * Returns a specific page of related items from the available search results. Up to ten items are returned per page. This parameter can be used with the RelatedItems response group.
   * For example, when RelatedItemPage is set to 2, the second set is returned.
   * Type: String
   * Default: None
   */
  relatedItemPage?: string

  /**
   * Returns the relationship between associated items. Example values include Episode, Season, and Tracks.
   * Constraint: Required when RelatedItems response group is used.
   * Type: String
   * Default: None
   * Valid values: See Related Items.
   */
  relationshipType?: string

  /**
   * The product category to search. Some ItemSearch parameters are valid only with specific values of SearchIndex.
   * Type: String
   * Default: None
   * Valid values: A search index, such as Apparel, Beauty, Blended, Books, and so on.
   * For a complete list of search indices, see Locale Reference for the Product Advertising API.
   */
  searchIndex: string
  
  /**
   * The way in which items in the response are ordered.
   * Type: String
   * Default: None
   * Valid values: Values vary by search index.
   * For a list of valid values, see Locale Reference for the Product Advertising API.
   */
  sort?: string

  /**
   * Title associated with the item. You can enter all or part of the title. Title searches are a subset of Keyword searches. Use a Keywords search if a Title search does not return the items you want.
   * Title can be used with every index, except All and Blended.
   * Type: String
   * Default: None
   */
  title?: string

  /**
   * By default, reviews are truncated to 1000 characters. Choose a value to specify a length. To return the entire review, use 0 .
   * Type: Integer
   * Default: 1000
   * Constraints: Must be a positive integer or 0.
   */
  truncateReviewsAt?: number

  /**
   * Returns a specific page of variations. For example, set VariationPage to 2 to return offers 11 to 20 . The total number of pages appears in the TotalPages element.
   * Type: String
   * Default: None
   * Valid values: Positive integer
   */
  variationPage?: string

  /**
   * Specifies the types of values to return. Separate multiple response groups with commas.
   * Type: String
   * Default: Small
   * Valid values: See Response Groups.
   */
  responseGroup?: string
}

/**
 * BrowseNodeLookup Query
 * http://docs.aws.amazon.com/ko_kr/AWSECommerceService/latest/DG/BrowseNodeLookup.html
 */
export interface IBrowseNodeLookupQuery {
  /**
   * A positive integer assigned by Amazon that uniquely identifies a product category.
   * Type: String
   * Default: None
   * Valid Values:A positive integer. For a list of valid browse node IDs, see [Locale Reference for the Product Advertising API](http://docs.aws.amazon.com/ko_kr/AWSECommerceService/latest/DG/localevalues.html).
   */
  browseNodeId: string

  /**
   * Specifies the types of values to return. You can specify multiple response groups in one request by separating them with commas.
   * Default: BrowseNodeInfo
   * Valid Values: MostGifted | NewReleases | MostWishedFor | TopSellers
   */
  responseGroup: string
}

/**
 * ItemLookup query
 * http://docs.aws.amazon.com/ko_kr/AWSECommerceService/latest/DG/ItemLookup.html
 */
export interface IItemLookupQuery {
  /**
   * Specifies an item's condition. If Condition is set to "All", a separate set of responses is returned for each valid value of Condition. The default value is "New" (not "All"). So, if your request does not return results, consider setting the value to "All". When the value is "New", the ItemLookup availability parameter cannot be set to "Available". Amazon only sells items that are "New".
   * Type: String
   * Default: New
   * Valid Values: Used | Collectible | Refurbished, All
   */
  condition?: string

  /**
   * Type of item identifier used to look up an item. All IdTypes except ASINx require a SearchIndex to be specified.
   * Type: String
   * Default: ASIN
   * Valid Values: SKU | UPC | EAN | ISBN (US only, when search index is Books). UPC is not valid in the CA locale.
   */
  idType?: string

  /**
   * When set to true, returns the reviews summary within the Reviews iframe.
   * Type: Boolean
   * Default: True
   * Valid Values: True | False
   */
  includeReviewsSummary?: boolean

  /**
   * One or more (up to ten) positive integers that uniquely identify an item. The meaning of the number is specified by IdType. That is, if IdType is ASIN, the ItemId value is an ASIN. If ItemIdis an ASIN, a search index cannot be specified in the request.
   * Type: String
   * Default: None
   * Constraints: Must be a valid item ID. For more than one ID, use a comma-separated list of up to ten IDs.
   */
  itemId: string

  /**
   * An optional parameter you can use to filter search results and offer listings to only include items sold by Amazon. By default, the API will return items sold by various merchants including Amazon. Enter Amazon if you only want to see items sold by Amazon in the response.
   * Type: String
   * Valid Values: Amazon
   */
  merchantId?: string

  /**
   * This optional parameter is only valid when the RelatedItems response group is used. Each ItemLookup request can return, at most, ten related items. The RelatedItemPage value specifies the set of ten related items to return. A value of 2, for example, returns the second set of ten related items
   */
  relatedItemPage?: string

  /**
   * This parameter is required when the RelatedItems response group is used. The type of related item returned is specified by the RelationshipType parameter. Sample values include Episode, Season, and Tracks. For a complete list of types, see Relationship Types.
   * Required when RelatedItems response group is used.
   */
  relationshipType?: string
  
  /**
   * The product category to search.
   * Type: String
   * Default: None
   * Valid Values: A search index, for example, Apparel, Beauty, Blended, Books, and so forth. For a complete of search indices, see Locale Reference for the Product Advertising API.
   * Constraint: If ItemIdis an ASIN, a search index cannot be specified in the request. Required for non-ASIN ItemIds.
   */
  searchIndex?: string

  /**
   * By default, reviews are truncated to 1000 characters within the Reviews iframe. To specify a different length, enter the value. To return complete reviews, specify 0.
   * Type: Integer
   * Default: 1000
   * Constraints: Must be a positive integer or 0 (returns entire review)
   */
  truncateReviewsAt?: number

  /**
   * Page number of variations returned by ItemLookup. By default, ItemLookup returns all variations. Use VariationPage to return a subsection of the response. There are 10 variations per page. To examine offers 11 through 20, for example, set VariationPage to 2.
   * Type: String
   * Default: All
   * Valid Values: Integer between 1 and 150, inclusive
   */
  variationPage?: string

  /**
   * Specifies the types of values to return. You can specify multiple response groups in one request by separating them with commas.
   * Type: String
   * Default: Small
   * Valid Values: Accessories | BrowseNodes | EditorialReview | Images | ItemAttributes | ItemIds | Large | Medium | OfferFull | Offers | PromotionSummary | OfferSummary| RelatedItems | Reviews | SalesRank | Similarities | Small | Tracks | VariationImages | Variations (US only) | VariationSummary
   */
  responseGroup?: string
}

interface IQuery {
  func: string,
  query: any,
  resolve: (result) => void,
  reject: (error) => void,
}

export class AmazonProductAdvertising {
  private _client: api.IAmazonProductClient
  private _queries: IQuery[] = []
  private _timerId: number = null
  private _interval: number = 1000

  constructor(credentials: ICredentials) {
    this._client = api.createClient(credentials)
  }

  /**
   * itemSearch
   * http://docs.aws.amazon.com/ko_kr/AWSECommerceService/latest/DG/ItemSearch.html
   * @param query itemSearch query
   */
  itemSearch(query: IItemSearchQuery): Promise<Object[]> {
    return this._newPromise('itemSearch', query)
  }

  /**
   * browseNodeLookup
   * http://docs.aws.amazon.com/ko_kr/AWSECommerceService/latest/DG/BrowseNodeLookup.html
   * @param query browseNodeLookup query
   */
  browseNodeLookup(query: IBrowseNodeLookupQuery): Promise<Object[]> {
    return this._newPromise('browseNodeLookup', query)
  }

  /**
   * itemLookup
   * http://docs.aws.amazon.com/ko_kr/AWSECommerceService/latest/DG/ItemLookup.html
   * @param query itemLookup query
   */
  itemLookup(query: IItemLookupQuery): Promise<Object[]> {
    return this._newPromise('itemLookup', query)
  }

  start(interval: number) {
    this._interval = interval
    if(this._timerId === null) {
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
    this._timerId = null
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
        this._timerId = setTimeout(this._process.bind(this), this._interval)
      })
    } 
  }
}