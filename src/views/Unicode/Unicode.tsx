import styles from './Unicode.module.scss'
import classnames from '@/utils/classnames'
import { CProps } from '@/types/CProps'
import EmojiList from '@/components/EmojiList/EmojiList'

export type UnicodeProps = CProps<{}>

const Unicode = (props: UnicodeProps) => {
  return (
    <div className={classnames(styles.unicode, props.className)}>
      <EmojiList></EmojiList>
    </div>
  )
}

export default Unicode
