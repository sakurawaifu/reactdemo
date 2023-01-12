import styles from './EmojiList.module.scss'
import classnames from '@/utils/classnames'
import { CProps } from '@/types/CProps'
import { memo } from 'react'
import EmojiCell from '@/components/EmojiList/components/EmojiCell/EmojiCell'

export type EmojiListProps = CProps<{}>

const startCodePoint = 0x1f900
const endCodePoint = 0x1fa00
const count = endCodePoint - startCodePoint + 1

const EmojiList = memo((props: EmojiListProps) => {
  const cells = []
  for (let i = 0; i < count; i++) {
    const curCodePoint = startCodePoint + i
    cells.push(
      <EmojiCell
        key={curCodePoint}
        className={styles.emojiCell}
        codePoint={curCodePoint}
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
