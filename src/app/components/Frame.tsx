import { AnimatePresence, motion } from 'framer-motion'

type FrameProps = {
  isVisible: boolean
}

function Frame({ isVisible }: FrameProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute left-1/2 top-1/2 h-[calc(100%-40px)] w-[calc(100%-40px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-slate-100"
        >
          <div className="absolute left-[70px] top-0 h-full w-px bg-slate-100" />
          <div className="absolute left-0 top-[50px] h-px w-full bg-slate-100" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Frame
