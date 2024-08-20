'use client'

import { useSubscription } from '@apollo/client'
import { GetLogsDocument } from '../gql/graphql'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'

export default function LastActivities() {
  const { data, loading, error } = useSubscription(GetLogsDocument, {
    variables: {
      limit: 6,
    },
  })

  console.log(data?.logs)

  return (
    <div>
      <h1>Last activities</h1>

      <AnimatePresence>
        {data?.logs.map((log) => (
          <motion.div
            key={log.transaction_hash}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <p>
              {log.block_number} - {log.transaction_hash}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
