import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import { cn } from '../../util/cn'

export const TextGenerateEffect = ({ words, className }: { words: string; className?: string }) => {
  const [scope, animate] = useAnimate()
  let wordsArray = words.split(' ')
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1
      },
      {
        duration: 3,
        delay: stagger(0.09)
      }
    )
  }, [scope.current])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className="dark:text-white text-black opacity-0">
              {word}{' '}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn('font-semibold', className)}>
      <div className="mt-2">
        <div className="dark:text-white text-black text-xl leading-snug tracking-wide text-center">{renderWords()}</div>
      </div>
    </div>
  )
}
