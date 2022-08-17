import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
  Dimension: any
  HexColor: any
  JSON: any
  Quality: any
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset'
  contentType?: Maybe<Scalars['String']>
  contentfulMetadata: ContentfulMetadata
  description?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Int']>
  linkedFrom?: Maybe<AssetLinkingCollections>
  size?: Maybe<Scalars['Int']>
  sys: Sys
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>
  transform?: InputMaybe<ImageTransformOptions>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type AssetCollection = {
  __typename?: 'AssetCollection'
  items: Array<Maybe<Asset>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>
  contentType?: InputMaybe<Scalars['String']>
  contentType_contains?: InputMaybe<Scalars['String']>
  contentType_exists?: InputMaybe<Scalars['Boolean']>
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentType_not?: InputMaybe<Scalars['String']>
  contentType_not_contains?: InputMaybe<Scalars['String']>
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description?: InputMaybe<Scalars['String']>
  description_contains?: InputMaybe<Scalars['String']>
  description_exists?: InputMaybe<Scalars['Boolean']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  description_not?: InputMaybe<Scalars['String']>
  description_not_contains?: InputMaybe<Scalars['String']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fileName?: InputMaybe<Scalars['String']>
  fileName_contains?: InputMaybe<Scalars['String']>
  fileName_exists?: InputMaybe<Scalars['Boolean']>
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fileName_not?: InputMaybe<Scalars['String']>
  fileName_not_contains?: InputMaybe<Scalars['String']>
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  height?: InputMaybe<Scalars['Int']>
  height_exists?: InputMaybe<Scalars['Boolean']>
  height_gt?: InputMaybe<Scalars['Int']>
  height_gte?: InputMaybe<Scalars['Int']>
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  height_lt?: InputMaybe<Scalars['Int']>
  height_lte?: InputMaybe<Scalars['Int']>
  height_not?: InputMaybe<Scalars['Int']>
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  size?: InputMaybe<Scalars['Int']>
  size_exists?: InputMaybe<Scalars['Boolean']>
  size_gt?: InputMaybe<Scalars['Int']>
  size_gte?: InputMaybe<Scalars['Int']>
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  size_lt?: InputMaybe<Scalars['Int']>
  size_lte?: InputMaybe<Scalars['Int']>
  size_not?: InputMaybe<Scalars['Int']>
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']>
  title_contains?: InputMaybe<Scalars['String']>
  title_exists?: InputMaybe<Scalars['Boolean']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_not?: InputMaybe<Scalars['String']>
  title_not_contains?: InputMaybe<Scalars['String']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  url?: InputMaybe<Scalars['String']>
  url_contains?: InputMaybe<Scalars['String']>
  url_exists?: InputMaybe<Scalars['Boolean']>
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  url_not?: InputMaybe<Scalars['String']>
  url_not_contains?: InputMaybe<Scalars['String']>
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  width?: InputMaybe<Scalars['Int']>
  width_exists?: InputMaybe<Scalars['Boolean']>
  width_gt?: InputMaybe<Scalars['Int']>
  width_gte?: InputMaybe<Scalars['Int']>
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  width_lt?: InputMaybe<Scalars['Int']>
  width_lte?: InputMaybe<Scalars['Int']>
  width_not?: InputMaybe<Scalars['Int']>
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  pageCollection?: Maybe<PageCollection>
  plantCollection?: Maybe<PlantCollection>
}

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type AssetLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type AssetLinkingCollectionsPlantCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata'
  tags: Array<Maybe<ContentfulTag>>
}

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>
  tags_exists?: InputMaybe<Scalars['Boolean']>
}

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag'
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata
  sys: Sys
}

export type EntryCollection = {
  __typename?: 'EntryCollection'
  items: Array<Maybe<Entry>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  sys?: InputMaybe<SysFilter>
}

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP',
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB',
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>
}

/** [See type definition](https://app.contentful.com/spaces/51s10dmfl6an/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page'
  contentfulMetadata: ContentfulMetadata
  image?: Maybe<Asset>
  linkedFrom?: Maybe<PageLinkingCollections>
  sys: Sys
  title?: Maybe<PageTitle>
}

/** [See type definition](https://app.contentful.com/spaces/51s10dmfl6an/content_types/page) */
export type PageImageArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** [See type definition](https://app.contentful.com/spaces/51s10dmfl6an/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/51s10dmfl6an/content_types/page) */
export type PageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type PageCollection = {
  __typename?: 'PageCollection'
  items: Array<Maybe<Page>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  image_exists?: InputMaybe<Scalars['Boolean']>
  sys?: InputMaybe<SysFilter>
  title_contains?: InputMaybe<Scalars['String']>
  title_exists?: InputMaybe<Scalars['Boolean']>
  title_not_contains?: InputMaybe<Scalars['String']>
}

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum PageOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type PageTitle = {
  __typename?: 'PageTitle'
  json: Scalars['JSON']
  links: PageTitleLinks
}

export type PageTitleAssets = {
  __typename?: 'PageTitleAssets'
  block: Array<Maybe<Asset>>
  hyperlink: Array<Maybe<Asset>>
}

export type PageTitleEntries = {
  __typename?: 'PageTitleEntries'
  block: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  inline: Array<Maybe<Entry>>
}

export type PageTitleLinks = {
  __typename?: 'PageTitleLinks'
  assets: PageTitleAssets
  entries: PageTitleEntries
}

/** plant [See type definition](https://app.contentful.com/spaces/51s10dmfl6an/content_types/plant) */
export type Plant = Entry & {
  __typename?: 'Plant'
  acquired?: Maybe<Scalars['DateTime']>
  contentfulMetadata: ContentfulMetadata
  description?: Maybe<Scalars['String']>
  image?: Maybe<Asset>
  linkedFrom?: Maybe<PlantLinkingCollections>
  sys: Sys
  title?: Maybe<Scalars['String']>
}

/** plant [See type definition](https://app.contentful.com/spaces/51s10dmfl6an/content_types/plant) */
export type PlantAcquiredArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** plant [See type definition](https://app.contentful.com/spaces/51s10dmfl6an/content_types/plant) */
export type PlantDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** plant [See type definition](https://app.contentful.com/spaces/51s10dmfl6an/content_types/plant) */
export type PlantImageArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** plant [See type definition](https://app.contentful.com/spaces/51s10dmfl6an/content_types/plant) */
export type PlantLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** plant [See type definition](https://app.contentful.com/spaces/51s10dmfl6an/content_types/plant) */
export type PlantTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type PlantCollection = {
  __typename?: 'PlantCollection'
  items: Array<Maybe<Plant>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type PlantFilter = {
  AND?: InputMaybe<Array<InputMaybe<PlantFilter>>>
  OR?: InputMaybe<Array<InputMaybe<PlantFilter>>>
  acquired?: InputMaybe<Scalars['DateTime']>
  acquired_exists?: InputMaybe<Scalars['Boolean']>
  acquired_gt?: InputMaybe<Scalars['DateTime']>
  acquired_gte?: InputMaybe<Scalars['DateTime']>
  acquired_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  acquired_lt?: InputMaybe<Scalars['DateTime']>
  acquired_lte?: InputMaybe<Scalars['DateTime']>
  acquired_not?: InputMaybe<Scalars['DateTime']>
  acquired_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description?: InputMaybe<Scalars['String']>
  description_contains?: InputMaybe<Scalars['String']>
  description_exists?: InputMaybe<Scalars['Boolean']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  description_not?: InputMaybe<Scalars['String']>
  description_not_contains?: InputMaybe<Scalars['String']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  image_exists?: InputMaybe<Scalars['Boolean']>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']>
  title_contains?: InputMaybe<Scalars['String']>
  title_exists?: InputMaybe<Scalars['Boolean']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_not?: InputMaybe<Scalars['String']>
  title_not_contains?: InputMaybe<Scalars['String']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type PlantLinkingCollections = {
  __typename?: 'PlantLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type PlantLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum PlantOrder {
  AcquiredAsc = 'acquired_ASC',
  AcquiredDesc = 'acquired_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type Query = {
  __typename?: 'Query'
  asset?: Maybe<Asset>
  assetCollection?: Maybe<AssetCollection>
  entryCollection?: Maybe<EntryCollection>
  page?: Maybe<Page>
  pageCollection?: Maybe<PageCollection>
  plant?: Maybe<Plant>
  plantCollection?: Maybe<PlantCollection>
}

export type QueryAssetArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AssetFilter>
}

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<EntryFilter>
}

export type QueryPageArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PageFilter>
}

export type QueryPlantArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type QueryPlantCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<PlantOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PlantFilter>
}

export type Sys = {
  __typename?: 'Sys'
  environmentId: Scalars['String']
  firstPublishedAt?: Maybe<Scalars['DateTime']>
  id: Scalars['String']
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedVersion?: Maybe<Scalars['Int']>
  spaceId: Scalars['String']
}

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  id?: InputMaybe<Scalars['String']>
  id_contains?: InputMaybe<Scalars['String']>
  id_exists?: InputMaybe<Scalars['Boolean']>
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  id_not?: InputMaybe<Scalars['String']>
  id_not_contains?: InputMaybe<Scalars['String']>
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedVersion?: InputMaybe<Scalars['Float']>
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>
  publishedVersion_gt?: InputMaybe<Scalars['Float']>
  publishedVersion_gte?: InputMaybe<Scalars['Float']>
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  publishedVersion_lt?: InputMaybe<Scalars['Float']>
  publishedVersion_lte?: InputMaybe<Scalars['Float']>
  publishedVersion_not?: InputMaybe<Scalars['Float']>
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
}

export type PageCollectionFragment = {
  __typename?: 'PageCollection'
  items: Array<{
    __typename?: 'Page'
    image?: {
      __typename?: 'Asset'
      title?: string | null
      url?: string | null
    } | null
  } | null>
}

export type PageCollectionsQueryVariables = Exact<{ [key: string]: never }>

export type PageCollectionsQuery = {
  __typename?: 'Query'
  pageCollection?: {
    __typename?: 'PageCollection'
    items: Array<{
      __typename?: 'Page'
      image?: {
        __typename?: 'Asset'
        title?: string | null
        url?: string | null
      } | null
    } | null>
  } | null
}

export type PlantCollectionFragment = {
  __typename?: 'PlantCollection'
  items: Array<{
    __typename?: 'Plant'
    title?: string | null
    description?: string | null
    acquired?: any | null
    image?: {
      __typename?: 'Asset'
      title?: string | null
      url?: string | null
    } | null
  } | null>
}

export type PlantCollectionsQueryVariables = Exact<{ [key: string]: never }>

export type PlantCollectionsQuery = {
  __typename?: 'Query'
  plantCollection?: {
    __typename?: 'PlantCollection'
    items: Array<{
      __typename?: 'Plant'
      title?: string | null
      description?: string | null
      acquired?: any | null
      image?: {
        __typename?: 'Asset'
        title?: string | null
        url?: string | null
      } | null
    } | null>
  } | null
}

export const PageCollectionFragmentDoc = gql`
  fragment PageCollection on PageCollection {
    items {
      image {
        title
        url
      }
    }
  }
`
export const PlantCollectionFragmentDoc = gql`
  fragment PlantCollection on PlantCollection {
    items {
      title
      description
      acquired
      image {
        title
        url
      }
    }
  }
`
export const PageCollectionsDocument = gql`
  query PageCollections {
    pageCollection {
      ...PageCollection
    }
  }
  ${PageCollectionFragmentDoc}
`

/**
 * __usePageCollectionsQuery__
 *
 * To run a query within a React component, call `usePageCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageCollectionsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePageCollectionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PageCollectionsQuery,
    PageCollectionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PageCollectionsQuery, PageCollectionsQueryVariables>(
    PageCollectionsDocument,
    options,
  )
}
export function usePageCollectionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PageCollectionsQuery,
    PageCollectionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    PageCollectionsQuery,
    PageCollectionsQueryVariables
  >(PageCollectionsDocument, options)
}
export type PageCollectionsQueryHookResult = ReturnType<
  typeof usePageCollectionsQuery
>
export type PageCollectionsLazyQueryHookResult = ReturnType<
  typeof usePageCollectionsLazyQuery
>
export type PageCollectionsQueryResult = Apollo.QueryResult<
  PageCollectionsQuery,
  PageCollectionsQueryVariables
>
export const PlantCollectionsDocument = gql`
  query PlantCollections {
    plantCollection {
      ...PlantCollection
    }
  }
  ${PlantCollectionFragmentDoc}
`

/**
 * __usePlantCollectionsQuery__
 *
 * To run a query within a React component, call `usePlantCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlantCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlantCollectionsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlantCollectionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PlantCollectionsQuery,
    PlantCollectionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PlantCollectionsQuery, PlantCollectionsQueryVariables>(
    PlantCollectionsDocument,
    options,
  )
}
export function usePlantCollectionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PlantCollectionsQuery,
    PlantCollectionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    PlantCollectionsQuery,
    PlantCollectionsQueryVariables
  >(PlantCollectionsDocument, options)
}
export type PlantCollectionsQueryHookResult = ReturnType<
  typeof usePlantCollectionsQuery
>
export type PlantCollectionsLazyQueryHookResult = ReturnType<
  typeof usePlantCollectionsLazyQuery
>
export type PlantCollectionsQueryResult = Apollo.QueryResult<
  PlantCollectionsQuery,
  PlantCollectionsQueryVariables
>
