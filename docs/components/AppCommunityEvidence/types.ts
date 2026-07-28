export type CommunityLocale = 'en' | 'zh'
export type CommunityPlacement = 'home' | 'community-hero' | 'guide'

export interface CommunityPost {
  id: string
  title: string
  url: string
  author: string
  platform: string
  language: string
  date: string
  summary: string
  tags: string[]
}

export interface CommunityEvidence {
  postId: string
  locale: CommunityLocale
  scenario: string
  useCases: string[]
  editorialSummary: string
  relatedGuides: string[]
  featuredPlacements: CommunityPlacement[]
}
