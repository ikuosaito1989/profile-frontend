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

export const renderMarkdown = (content: string): string =>
  marked.parse(content, { async: false })
