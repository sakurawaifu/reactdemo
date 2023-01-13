import styles from './CodePointInput.module.scss'
import { Input, InputProps } from 'antd'
import { CProps } from '@/types/CProps'
import classnames from '@/utils/classnames'
import { ChangeEventHandler, useState } from 'react'
import UnicodeUtils from '@/utils/UnicodeUtils'
import { omit } from 'lodash-es'

export type CodePointInputProps = CProps<Omit<InputProps, 'defaultValue' | 'onInput'> & {
  defaultValue?: number,
  onInput?: (codePoint: number) => void
}>

const CodePointInput = (props: CodePointInputProps) => {
  const [text, setText] = useState(
    props.defaultValue !== undefined
      ? UnicodeUtils.format(props.defaultValue)
      : ''
  )

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ currentTarget: { value } }) => {
    const filtratedText = value.replaceAll(/[^A-Fa-f0-9]/ug, '')
    const number = filtratedText === '' ? 0 : Number.parseInt(filtratedText, 16)
    const codePoint = UnicodeUtils.clamp(number)
    const resultText = UnicodeUtils.format(codePoint)
    setText(resultText)
    props.onInput?.(codePoint)
  }

  return (
    <Input
      {...omit(props, 'onInput')}
      className={classnames(styles.codePointInput, props.className)}
      prefix={'U+'}
      maxLength={6}
      value={text}
      onChange={handleChange}
    ></Input>
  )
}

export default CodePointInput
