import styles from './CodePointInput.module.scss'
import { Input } from 'antd'
import { CProps } from '@/types/CProps'
import classnames from '@/utils/classnames'
import { ChangeEventHandler, useState } from 'react'
import useBoolean from '@/hooks/common/useBoolean'

export type CodePointInputProps = CProps<{
  onInput?: (codePointHexStr: string) => void
}>

const INVALID_CHAR_REG = /[^A-Fa-f0-9]/ug

const CodePointInput = (props: CodePointInputProps) => {
  const [text, setText] = useState('')
  const [valid, setValid] = useBoolean(true)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const originText = e.currentTarget.value
    const result = originText.replaceAll(INVALID_CHAR_REG, '')
    const newText = result.toUpperCase()
    setText(newText)
    props.onInput?.(newText)
  }

  return (
    <Input
      className={classnames(styles.codePointInput, props.className)}
      prefix={'U+'}
      maxLength={6}
      value={text}
      onChange={handleChange}
    ></Input>
  )
}

export default CodePointInput
