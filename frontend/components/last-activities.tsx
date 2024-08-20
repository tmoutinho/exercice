'use client'

import { useSubscription } from '@apollo/client'
import { GetLogsDocument, Logs } from '../gql/graphql'
import { AnimatePresence } from 'framer-motion'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { format } from 'date-fns'
import { Badge } from '@radix-ui/themes'

const isBridge = (log: Logs) => {
  return log.decoded['amount1In'] !== '0' && log.decoded['amount0Out'] !== '0'
}

export default function LastActivities() {
  const { data, loading, error } = useSubscription(GetLogsDocument, {
    variables: {
      limit: 6,
    },
  })

  return (
    <div className="space-y-4 hidden sm:block">
      <h1 className="text-text/secondary text-base leading-6">
        Last activities
      </h1>

      {loading ? (
        <div className="animate-pulse rounded-md bg-elevation/background2 h-[433px]"></div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Activities</TableHead>
              <TableHead>Points</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>TXID</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <AnimatePresence>
              {data?.logs.map((log) => {
                const date = new Date(log.block_timestamp) // Example timestamp
                const formattedDate = format(date, 'dd.MM.yyyy')
                const formattedTime = format(date, 'HH:mm:ss')

                return (
                  <TableRow
                    key={log.block_number}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    layout
                  >
                    <TableCell className="text-text/primary font-medium leading-5 flex items-center gap-1">
                      {isBridge(log) ? (
                        <>
                          <BridgeIcon />
                          Bridged
                        </>
                      ) : (
                        <>
                          <TransactionIcon />
                          Transaction
                        </>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-states/success/elevation1/10 h-6 text-states/success inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors">
                        +
                        {log.decoded['amount0In'] !== '0'
                          ? log.decoded['amount0In']
                          : log.decoded['amount1In']}
                      </Badge>
                    </TableCell>
                    <TableCell className="space-x-1 items-center">
                      <span>{formattedDate}</span>
                      <Badge className="bg-elevation/background3 h-6 text-text/secondary inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors">
                        {formattedTime}
                      </Badge>
                    </TableCell>
                    <TableCell className="space-x-2">
                      <span>
                        {log.transaction_hash.slice(0, 4)}...
                        {log.transaction_hash.slice(-4)}
                      </span>
                      <button className="bg-elevation/background3 h-6 text-text/secondary inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors">
                        Copy
                      </button>
                    </TableCell>
                    <TableCell className="text-right">
                      <a href="#">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 8.66667V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H7.33333"
                            stroke="#ABAFB4"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14 2L8 8"
                            stroke="#ABAFB4"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 2H14V6"
                            stroke="#ABAFB4"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </TableCell>
                  </TableRow>
                )
              })}
            </AnimatePresence>
          </TableBody>
        </Table>
      )}
    </div>
  )
}

function BridgeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5001_10916)">
        <path
          d="M7.99992 4.66665C8.92039 4.66665 9.66658 3.92045 9.66658 2.99998C9.66658 2.07951 8.92039 1.33331 7.99992 1.33331C7.07944 1.33331 6.33325 2.07951 6.33325 2.99998C6.33325 3.92045 7.07944 4.66665 7.99992 4.66665Z"
          stroke="#F7F7F8"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.79995 4.20001L4.19995 6.80001"
          stroke="#F7F7F8"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.99992 9.66665C3.92039 9.66665 4.66658 8.92045 4.66658 7.99998C4.66658 7.07951 3.92039 6.33331 2.99992 6.33331C2.07944 6.33331 1.33325 7.07951 1.33325 7.99998C1.33325 8.92045 2.07944 9.66665 2.99992 9.66665Z"
          stroke="#F7F7F8"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.66663 8H11.3333"
          stroke="#F7F7F8"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.9999 9.66665C13.9204 9.66665 14.6666 8.92045 14.6666 7.99998C14.6666 7.07951 13.9204 6.33331 12.9999 6.33331C12.0794 6.33331 11.3333 7.07951 11.3333 7.99998C11.3333 8.92045 12.0794 9.66665 12.9999 9.66665Z"
          stroke="#F7F7F8"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.19995 11.8L11.8 9.20001"
          stroke="#F7F7F8"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.99992 14.6666C8.92039 14.6666 9.66658 13.9205 9.66658 13C9.66658 12.0795 8.92039 11.3333 7.99992 11.3333C7.07944 11.3333 6.33325 12.0795 6.33325 13C6.33325 13.9205 7.07944 14.6666 7.99992 14.6666Z"
          stroke="#F7F7F8"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5001_10916">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

function TransactionIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33329 2L2.66663 4.66667L5.33329 7.33333"
        stroke="#F7F7F8"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.66663 4.66669H13.3333"
        stroke="#F7F7F8"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6666 14L13.3333 11.3334L10.6666 8.66669"
        stroke="#F7F7F8"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 11.3333H2.66663"
        stroke="#F7F7F8"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
