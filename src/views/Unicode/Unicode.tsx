import styles from './Unicode.module.scss'
import classnames from '@/utils/classnames'
import { CProps } from '@/types/CProps'
import EmojiList from '@/components/EmojiList/EmojiList'
import CodePointInput, { CodePointInputProps } from '@/components/CodePointInput/CodePointInput'

export type UnicodeProps = CProps<{}>

const Unicode = (props: UnicodeProps) => {
  const handleInput: CodePointInputProps['onInput'] = codePointHexStr => {
    console.log(codePointHexStr)
  }

  return (
    <div className={classnames(styles.unicode, props.className)}>
      <div className={styles.actionBar}>
        <CodePointInput onInput={handleInput}></CodePointInput>
      </div>
      <EmojiList></EmojiList>
    </div>
  )
}

export default Unicode
