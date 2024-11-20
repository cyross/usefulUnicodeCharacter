export interface JsonDataBySubCategory {
  [subCategory: string]: string[]
}
export interface JsonDataMapInterface {
  [category: string]: JsonDataBySubCategory | (() => JsonDataBySubCategory)
}
