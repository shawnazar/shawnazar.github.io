import glob from 'fast-glob'
import { parse } from 'rss-to-json';
import slugify from 'slugify';

interface Article {
  title: string
  // description: string
  content: string
  // author: string
  // date: string
  slug: string
}

export interface ArticleWithSlug extends Article {
  slug: string
}

// async function importArticle(
//   articleFilename: string,
// ): Promise<ArticleWithSlug> {
//   let { article } = (await import(`../app/articles/${articleFilename}`)) as {
//     default: React.ComponentType
//     article: Article
//   }

//   return {
//     slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
//     ...article,
//   }
// }

export async function importArticle(article: any): Promise<Article> {
  return {
    slug: slugify(article.title, { lower: true }),
    title: article.title,
    content: article.content,
    // date: new Date(article.pubDate),
    // Add any other properties you need here
  }
}



export async function getAllArticles() {
  var mediumArticles = await parse('https://medium.com/feed/@shawnazar');
  let articles = await Promise.all(mediumArticles.items.map(importArticle))
  return articles;
}