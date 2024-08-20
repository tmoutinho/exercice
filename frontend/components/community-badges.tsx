'use client'

import { useBadgeStore } from '@/lib/badge-store'
import { Badges } from '@/lib/data'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function CommunityBadges() {
  const { addBadge, removeBadge, activeBadges } = useBadgeStore()

  return (
    <>
      <div className="rounded-md">
        <div className="bg-elevation/background2 text-text/primary h-9 px-4 flex items-center text-xs font-medium">
          Community badges
        </div>
        <div className="bg-elevation/background1 p-4 max-w-full overflow-x-auto">
          <div className="sm:flex grid grid-cols-2 gap-2">
            {Badges.map((badge, index) => (
              <div
                key={index}
                onClick={() => {
                  activeBadges.includes(badge)
                    ? removeBadge(badge)
                    : addBadge(badge, index)
                }}
                className={cn(
                  'bg-elevation/background3 border-1 rounded-md sm:w-[178px] cursor-pointer overflow-hidden border flex-shrink-0',
                  activeBadges.includes(badge)
                    ? 'border-states/success'
                    : 'border-elevation/background1',
                )}
              >
                <div
                  className={cn(
                    'h-8 flex items-center bg-elevation/background2 px-2 text-xs',
                    badge.extra ? 'justify-between' : 'justify-center',
                  )}
                >
                  {badge.name}
                  {badge.extra && (
                    <span className="text-text/secondary">{badge.extra}</span>
                  )}
                </div>
                <div className="flex items-center justify-center h-28">
                  <div
                    className={cn(
                      'w-16 h-16 ring-4 rounded-full relative',
                      activeBadges.includes(badge)
                        ? 'ring-states/success'
                        : 'ring-transparent grayscale',
                    )}
                  >
                    <Image
                      src={`/badges/${badge.image}`}
                      alt={badge.name}
                      width={64}
                      height={64}
                      quality={100}
                      priority
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div className="bg-states/success/elevation1/10 text-states/success h-8 flex items-center justify-center text-xs font-medium">
                  {badge.multiplier}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
