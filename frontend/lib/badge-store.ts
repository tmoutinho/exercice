import { create } from 'zustand'
import { type Badge } from './data'

interface BadgeState {
  activeBadges: Badge[]
  activeIndex: number | null
  addBadge: (badge: Badge, index: number) => void
  removeBadge: (badge: Badge) => void
}

export const useBadgeStore = create<BadgeState>((set) => ({
  activeBadges: [],
  activeIndex: null,
  addBadge: (badge, index) =>
    set((state) => ({
      activeBadges: [...state.activeBadges, badge],
      activeIndex: index,
    })),
  removeBadge: (badge) =>
    set((state) => ({
      activeBadges: state.activeBadges.filter(
        (activeBadge) => activeBadge !== badge,
      ),
      activeIndex: null,
    })),
}))
