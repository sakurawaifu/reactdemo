import styles from './Counter.module.scss'
import React, { useEffect } from 'react'
import BasePropsType from '../../ts_define/BasePropsType'
import clsmix from '../../utils/clsmix'
import useCount from '../../hooks/useCount'

export type CounterProps = BasePropsType & {
  /* 初始值 */
  init?: number
  delta?: number,
  onChange?: (value: number) => void
}

const Counter = (props: CounterProps) => {
  console.log('counter')
  const {
    init = 0,
    delta = 1,
    onChange
  } = props

  const [
    count,
    {
      setCount,
      decrement,
      increment
    }
  ] = useCount(init, delta)

  useEffect(() => {
    onChange?.(count)
  }, [count, onChange])

  return (
    <div className={clsmix(styles.counter, props.className)}>
      <input
        className={styles.input}
        value={count}
        onInput={e => setCount(Number(e.currentTarget.value))}
      />
      <div className={styles.actionBtns}>
        <div className={styles.incBtn} onClick={increment}>∧</div>
        <div className={styles.decBtn} onClick={decrement}>∨</div>
      </div>
    </div>
  )
}

export default Counter
