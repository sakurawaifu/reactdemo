import styles from './Counter.module.scss'
import { useEffect } from 'react'
import useCount from '../../hooks/common/useCount'
import { CProps } from '@/types/CProps'
import classnames from '../../utils/classnames'

export type CounterProps = CProps<{
  init?: number
  delta?: number
  onChange?: (value: number) => void
}>

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
  }, [count])

  return (
    <div className={classnames(styles.counter, props.className)}>
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
