export type BlogSection =
  | { type: 'paragraph'; content: string }
  | { type: 'heading'; content: string }
  | { type: 'list'; content: string[] }

export interface BlogPost {
  id: number
  title: string
  date: string
  description: string
  tags: string[]
  sections: BlogSection[]
}

// ── Import posts here ──
import mlPipelines from './posts/ml-pipelines'

// ── Add new posts to this array (newest first) ──
const BLOG_POSTS: BlogPost[] = [
  mlPipelines,
]

export default BLOG_POSTS
