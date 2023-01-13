import styles from './EmojiCell.module.scss'
import classnames from '@/utils/classnames'
import { CProps } from '@/types/CProps'
import { Popover } from 'antd'
import UnicodeUtils from '@/utils/UnicodeUtils'

export type EmojiCellProps = CProps<{
  codePoint: number
}>

const EmojiCell = (props: EmojiCellProps) => {
  const formatStr = UnicodeUtils.format(props.codePoint)

  return (
    <Popover content={'U+' + formatStr} mouseLeaveDelay={0}>
      <div className={classnames(styles.emojiCell, props.className)}>
        {String.fromCodePoint(props.codePoint)}
      </div>
    </Popover>
  )
}

export default EmojiCell
