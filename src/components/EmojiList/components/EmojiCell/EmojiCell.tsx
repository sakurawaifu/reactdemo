import styles from './EmojiCell.module.scss'
import classnames from '@/utils/classnames'
import { CProps } from '@/types/CProps'

export type EmojiCellProps = CProps<{
  codePoint: number
}>

const EmojiCell = (props: EmojiCellProps) => {
  return (
    <div className={classnames(styles.emojiCell, props.className)}>
      {String.fromCodePoint(props.codePoint)}
    </div>
  )
}

export default EmojiCell
