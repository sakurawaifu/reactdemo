import styles from './Unicode.module.scss'
import classnames from '@/utils/classnames'
import { CProps } from '@/types/CProps'
import EmojiList from '@/components/EmojiList/EmojiList'
import CodePointInput from '@/components/CodePointInput/CodePointInput'
import { Button } from 'antd'
import { useRef, useState } from 'react'

export type UnicodeProps = CProps<{}>

const defaultStart = 0
const defaultEnd = 127

const Unicode = (props: UnicodeProps) => {
  let startCodePointRef = useRef(defaultStart)
  let endCodePointRef = useRef(defaultEnd)

  const [pair, setPair] = useState<[number, number]>([defaultStart, defaultEnd])
  const generate = () => {
    console.log([startCodePointRef.current, endCodePointRef.current])
    setPair([startCodePointRef.current, endCodePointRef.current])
  }

  return (
    <div className={classnames(styles.unicode, props.className)}>
      <div className={styles.actionBar}>
        <CodePointInput
          defaultValue={defaultStart}
          onInput={codePoint => startCodePointRef.current = codePoint}
        ></CodePointInput>
        <CodePointInput
          defaultValue={defaultEnd}
          onInput={codePoint => endCodePointRef.current = codePoint}
        ></CodePointInput>
        <Button type="primary" onClick={generate}>生成</Button>
      </div>
      <EmojiList start={pair[0]} end={pair[1]}></EmojiList>
    </div>
  )
}

export default Unicode
