import React from 'react'
import { motion } from 'framer-motion'


export default function Reveal() {
  return (
    <div >
      <motion.div variants={{
        hidden:{opacity:0, y:75},
        visible:{opacity:1, y:0},
      }}
      initial="hidden" animate="visible">

      </motion.div>
    </div>
  )
}
