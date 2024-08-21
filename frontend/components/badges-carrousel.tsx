'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BadgeConfig, Badges, type Badge } from '@/lib/data'
import { useBadgeStore } from '@/lib/badge-store'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Badge as BadgeRadix, Button } from '@radix-ui/themes'

export default function BadgesCarrousel() {
  return (
    <>
      <div className="space-y-4">
        <h1 className="text-text/secondary text-base leading-6">Badges</h1>

        <div className="bg-elevation/background1 space-y-3 p-4">
          <Carousel />
          <HowToEarn />
        </div>
      </div>
    </>
  )
}

function Carousel() {
  const { activeIndex } = useBadgeStore()
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5, 6])

  useEffect(() => {
    if (activeIndex !== null) {
      setPositionIndexes(getPositionIndexes(activeIndex))
    }
  }, [activeIndex])

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % Badges.length,
      )
      return updatedIndexes
    })
  }

  const getPositionIndexes = (activeIndex: number) => {
    const positions = []
    for (let i = -3; i <= 3; i++) {
      positions.push((activeIndex - i + Badges.length) % Badges.length)
    }
    return positions
  }

  const handlePrev = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex - 1 + Badges.length) % Badges.length,
      )
      return updatedIndexes
    })
  }

  const positions = [
    'left2',
    'left1',
    'left',
    'center',
    'right',
    'right1',
    'right2',
  ]
  const imageVariants = {
    left2: { x: '-260%' },
    left1: { x: '-190%' },
    left: { x: '-110%', zindex: 1 },
    center: { x: '0%', zindex: 5 },
    right: { x: '110%', zindex: 1 },
    right1: { x: '190%' },
    right2: { x: '260%' },
  }

  // allow user to navigate through badges using arrow keys
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        handleNext()
      } else if (event.key === 'ArrowLeft') {
        handlePrev()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      <motion.div
        className="relative flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Button
          onClick={handlePrev}
          className="bg-elevation/background3 rounded-full items-center justify-center w-12 flex h-60 z-10 flex-shrink-0"
        >
          <svg
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.99121 2.15215L2.1426 7.00075L6.99121 11.8494"
              stroke="white"
              strokeWidth="3.491"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>

        <div className="flex items-center h-60 justify-center bg-elevation/background1 w-full overflow-hidden">
          {Badges.map((badge, index) => {
            const position =
              positions[positionIndexes[index] % positions.length]
            const isCenterPosition = position === 'center'

            return (
              <motion.div
                key={index}
                className="absolute w-[178px]"
                initial="center"
                exit={{
                  opacity: 0,
                }}
                animate={position}
                variants={imageVariants}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
              >
                <div className="flex items-center justify-center">
                  {isCenterPosition ? (
                    <ActiveBadgeCard badge={badge} />
                  ) : (
                    <NotActiveBadgeCard badge={badge} position={position} />
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        <Button
          onClick={handleNext}
          className="bg-elevation/background3 rounded-full items-center justify-center w-12 flex h-60 z-10 flex-shrink-0"
        >
          <svg
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.00874 11.8479L6.85735 6.99925L2.00874 2.15064"
              stroke="white"
              strokeWidth="3.491"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </motion.div>
    </>
  )
}

function ActiveBadgeCard({ badge }: { badge: Badge }) {
  return (
    <div className="space-y-2">
      <div className="bg-elevation/background3 rounded-md sm:w-[178px] cursor-pointer overflow-hidden flex-shrink-0">
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
          <div className="w-16 h-16 rounded-full relative">
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

      <div className="py-1 bg-elevation/background2 flex flex-col items-center justify-center text-xs text-center">
        <p className="text-text/primary">Rewards Details</p>
        <p className="text-text/secondary">Liquidity Provision to ETH/USDC</p>
      </div>
    </div>
  )
}

function NotActiveBadgeCard({
  badge,
  position,
}: {
  badge: Badge
  position: string
}) {
  const config = BadgeConfig[position as keyof typeof BadgeConfig]

  return (
    <div
      className="space-y-2"
      style={{
        width: config.imageDivWidth,
      }}
    >
      <div
        className="flex items-center justify-center bg-elevation/background3 rounded-md"
        style={{
          width: config.imageDivWidth,
          height: config.imageDivHeight,
        }}
      >
        <div
          className="rounded-full relative"
          style={{
            width: config.image,
            height: config.image,
          }}
        >
          <Image
            src={`/badges/${badge.image}`}
            alt={badge.name}
            width={config.image}
            height={config.image}
            quality={100}
            priority
            className="rounded-full"
          />
        </div>
      </div>

      <div className="px-2 py-1 rounded-full space-y-1 bg-elevation/background3">
        <div
          className="grid grid-cols-3"
          style={{
            gap: `${config.gap}px`,
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="bg-text/disabled/10 rounded-full"
              style={{
                height: config.skeletonHeight,
              }}
            />
          ))}
        </div>
        <div
          className="bg-text/disabled/10 rounded-full"
          style={{
            height: config.skeletonHeight,
          }}
        />
      </div>
    </div>
  )
}

function HowToEarn() {
  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <h1 className="text-text/primary">
          How to Earn:{' '}
          <span className="text-text/secondary">
            Complete the actions for the badge, no specific order needed
          </span>
        </h1>

        <div className="flex gap-2 items-center">
          <BadgeRadix className="bg-elevation/background3 h-6 text-text/secondary w-full sm:w-auto inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors">
            1/3 Completed
          </BadgeRadix>
          <BadgeRadix className="bg-primary/disabled/20 h-6 text-primary/hover inline-flex w-full sm:w-auto items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors">
            Total Earning: 3,000
          </BadgeRadix>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-2 bg-elevation/background2 rounded-md overflow-hidden h-[70px]">
          <div className="bg-elevation/background3 flex items-center justify-between h-[38px] px-4 text-xs">
            Action{' '}
            <BadgeRadix className="bg-states/success/elevation1/10 h-6 text-states/success inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors">
              Completed
            </BadgeRadix>
          </div>
          <div className="text-text/secondary px-4 text-sm">
            Provide at least $50 Liquidity to use USDT/ETH
          </div>
        </div>

        <div className="space-y-2 bg-elevation/background2 rounded-md overflow-hidden h-[70px]">
          <div className="bg-elevation/background3 flex items-center justify-between h-[38px] px-4 text-xs">
            Action
          </div>
          <div className="text-text/secondary px-4 text-sm">
            Provide at least $50 Liquidity to use LINK/ETH
          </div>
        </div>

        <div className="space-y-2 bg-elevation/background2 rounded-md overflow-hidden h-[70px]">
          <div className="bg-elevation/background3 flex items-center justify-between h-[38px] px-4 text-xs">
            Action
          </div>
          <div className="text-text/secondary px-4 text-sm">
            Provide at least $100 Liquidity to use WBTC/ETH
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 py-1">
        <div className="bg-primary/default h-1 rounded-full"></div>
        <div className="bg-elevation/background3 h-1 rounded-full"></div>
        <div className="bg-elevation/background3 h-1 rounded-full"></div>
      </div>
    </div>
  )
}
