export interface JsonDataInterface {
  種別: string
  大文字: string
  小文字: string
  English: string
  分類: string
  備考: string
}

export interface JsonDataMapInterface {
  [key: string]: JsonDataInterface[]
}
