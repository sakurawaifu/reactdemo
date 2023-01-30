import styles from './CodePointInput.module.scss'
import { Input, InputProps } from 'antd'
import { CProps } from '@/types/CProps'
import classnames from '@/utils/classnames'
import { ChangeEventHandler, useRef, useState } from 'react'
import UnicodeUtils from '@/utils/UnicodeUtils'
import { omit } from 'lodash-es'

export type CodePointInputProps = CProps<Omit<InputProps, 'defaultValue' | 'onChange'> & {
  defaultValue?: number,
  onChange?: (codePoint: number) => void
}>

const CodePointInput = (props: CodePointInputProps) => {
  const codePointRef = useRef(props.defaultValue || 0)
  const [text, setText] = useState(
    props.defaultValue !== undefined
      ? UnicodeUtils.format(props.defaultValue)
      : ''
  )

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ currentTarget: { value } }) => {
    const filtratedText = value.replaceAll(/[^A-Fa-f0-9]/ug, '')
    if (filtratedText === '') {
      codePointRef.current = 0
      setText('')
      return
    }

    const number = Number.parseInt(filtratedText, 16)
    codePointRef.current = UnicodeUtils.clamp(number)
    const resultText = codePointRef.current.toString(16).toUpperCase()
    setText(resultText)
  }

  const handleBlur = () => {
    setText(t => UnicodeUtils.pad(t))
    props.onChange?.(codePointRef.current)
  }

  return (
    <Input
      {...omit(props, 'onChange')}
      className={classnames(styles.codePointInput, props.className)}
      prefix={'U+'}
      maxLength={6}
      value={text}
      onChange={handleChange}
      onBlur={handleBlur}
    ></Input>
  )
}

export default CodePointInput
