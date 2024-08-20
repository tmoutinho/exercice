'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Badges } from '@/lib/data'
import { useBadgeStore } from '@/lib/badge-store'

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

  console.log(activeIndex)

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % Badges.length,
      )
      console.log(updatedIndexes)
      return updatedIndexes
    })
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
    left2: { x: '-270%', scale: 0.3 },
    left1: { x: '-200%', scale: 0.7 },
    left: { x: '-110%', scale: 0.8 },
    center: { x: '0%', scale: 1 },
    right: { x: '110%', scale: 0.8 },
    right1: { x: '200%', scale: 0.7 },
    right2: { x: '270%', scale: 0.3 },
  }

  return (
    <>
      <div className="relative flex items-center justify-center overflow-hidden">
        <button
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
        </button>

        <div className="flex items-center h-60 justify-center bg-elevation/background1 w-full overflow-hidden">
          {Badges.map((badge, index) => {
            const position =
              positions[positionIndexes[index] % positions.length]

            return (
              <motion.div
                key={index}
                className="bg-white w-[178px] h-24 text-black absolute"
                initial="center"
                animate={position}
                variants={imageVariants}
                transition={{ duration: 0.5 }}
                style={{ position: 'absolute' }}
              >
                {badge.name} - {index}
              </motion.div>
            )
          })}
        </div>

        <button
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
        </button>
      </div>
    </>
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
          <div className="bg-elevation/background3 h-6 text-text/secondary w-full sm:w-auto inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors">
            1/3 Completed
          </div>
          <div className="bg-primary/disabled/20 h-6 text-primary/hover inline-flex w-full sm:w-auto items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors">
            Total Earning: 3,000
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-2 bg-elevation/background2 rounded-md overflow-hidden h-[70px]">
          <div className="bg-elevation/background3 flex items-center justify-between h-[38px] px-4 text-xs">
            Action{' '}
            <div className="bg-states/success/elevation1/10 h-6 text-states/success inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors">
              Completed
            </div>
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
