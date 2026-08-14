import { Marked } from 'marked'

/**
 * ```mermaid のコードブロックは mermaid が描画できる形で出力し、
 * それ以外は marked の標準動作に任せる。
 */
const marked = new Marked({
  renderer: {
    code({ text, lang }) {
      if (lang === 'mermaid') {
        return `<pre class="mermaid">${text
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')}</pre>`
      }
      return false
    }
  }
})

/**
 * meta description / og:description 用に Markdown を素のテキストへ落とす。
 * mermaid などのコードブロックは説明文として不適切なため丸ごと除去する。
 */
export const toPlainText = (markdown: string, maxLength = 120): string => {
  const text = markdown
    .replace(/```[\s\S]*?```/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/[#>*_`|-]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

  return text.length > maxLength ? `${text.slice(0, maxLength)}…` : text
}

export const renderMarkdown = (content: string): string =>
  marked.parse(content, { async: false })
