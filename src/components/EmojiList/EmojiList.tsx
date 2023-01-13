import styles from './EmojiList.module.scss'
import classnames from '@/utils/classnames'
import { CProps } from '@/types/CProps'
import { memo } from 'react'
import EmojiCell from '@/components/EmojiList/components/EmojiCell/EmojiCell'

export type EmojiListProps = CProps<{
  start: number,
  end: number
}>

const EmojiList = memo((props: EmojiListProps) => {
  const { start, end } = props

  const cells = []
  for (let i = start; i <= end; i++) {
    cells.push(
      <EmojiCell
        key={i}
        className={styles.emojiCell}
        codePoint={i}
      ></EmojiCell>
    )
  }

  return (
    <div className={classnames(styles.emojiList, props.className)}>
      <div className={styles.emojiListWrapper}>
        {cells}
      </div>
    </div>
  )
})

export default EmojiList
