import styles from './Child.module.scss'
import BasePropsType from '../../ts_define/BasePropsType'
import { useRef } from 'react'
import { Button } from 'antd'

export type ChildProps = BasePropsType & {}

const Child = (props: ChildProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    inputRef.current?.focus()
  }

  return (
    <div className="child">
      <input className={styles.input} type="text" ref={inputRef}/>
      <br/>
      <Button onClick={handleClick}>focus</Button>
    </div>
  )
}

export default Child
