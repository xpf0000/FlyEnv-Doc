import { trackEvent } from '../../utils/analytics'

type EvidenceEvent =
  | 'community_story_source_click'
  | 'community_story_guide_click'
  | 'home_community_story_source_click'
  | 'home_community_story_guide_click'
  | 'guide_community_story_source_click'
  | 'community_hub_click'

export function trackEvidenceEvent(eventName: EvidenceEvent, postId: string, placement: string) {
  trackEvent(eventName, { post_id: postId, placement })
}
