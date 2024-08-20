import BadgesCarrousel from '@/components/badges-carrousel'
import CommunityBadges from '@/components/community-badges'
import LastActivities from '@/components/last-activities'

export default function Home() {
  return (
    <div>
      <header></header>

      <LastActivities />

      <BadgesCarrousel />

      <CommunityBadges />

      <footer></footer>
    </div>
  )
}
