/**
 * OGP の画像・URL は絶対 URL でないとクローラが解決できないため、
 * サイトの baseUrl とパスを結合して絶対 URL を組み立てる。
 * 既に絶対 URL の場合はそのまま返す。
 */
export const toAbsoluteUrl = (baseUrl: string, path: string): string => {
  if (/^https?:\/\//.test(path)) return path
  return `${baseUrl.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`
}
