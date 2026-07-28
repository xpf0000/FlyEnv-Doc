type EvidenceEvent =
  | 'community_story_source_click'
  | 'community_story_guide_click'
  | 'home_community_story_source_click'
  | 'home_community_story_guide_click'
  | 'guide_community_story_source_click'
  | 'community_hub_click'

type Gtag = (command: 'event', name: EvidenceEvent, parameters: Record<string, string>) => void

export function trackEvidenceEvent(eventName: EvidenceEvent, postId: string, placement: string) {
  if (typeof window === 'undefined') return
  const gtag = (window as typeof window & { gtag?: Gtag }).gtag
  gtag?.('event', eventName, { post_id: postId, placement })
}
