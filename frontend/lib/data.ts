export type Badge = {
  name: string
  image: string
  multiplier: string
  details: string
  extra?: string
}

export const Badges = [
  {
    name: 'Discord OG',
    image: 'discord_og.png',
    multiplier: '1.5x',
    details: 'Liquidity Provision to ETH/USDC',
  },
  {
    name: 'Liquidity Machine',
    extra: '3 actions',
    image: 'liquidity_machine.png',
    multiplier: '1.5x',
    details: 'Liquidity Provision to ETH/USDC',
  },
  {
    name: 'Income Engineer',
    extra: '3 actions',
    image: 'income_engineer.png',
    multiplier: '2x',
    details: 'Liquidity Provision to ETH/USDC',
  },
  {
    name: 'Pudgy OG',
    image: 'pudgy_og.png',
    multiplier: '200 Points',
    details: 'Liquidity Provision to ETH/USDC',
  },
  {
    name: 'Pathfinder OG',
    image: 'pathfinder_og.png',
    multiplier: '1.15x',
    details: 'Liquidity Provision to ETH/USDC',
  },
  {
    name: 'Rookie Badge',
    extra: '1 action',
    image: 'rookie_badge.png',
    multiplier: '150 Points',
    details: 'Liquidity Provision to ETH/USDC',
  },
  {
    name: 'Check Badge',
    image: 'check_badge.png',
    multiplier: '150 Points',
    details: 'Liquidity Provision to ETH/USDC',
  },
]
