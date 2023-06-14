import styles from './Experiment.module.scss'
import { CProps } from '@/types/CProps'
import classnames from '@/utils/classnames'
import { ChangeEventHandler, FormEventHandler } from 'react'

export type ExperimentProps = CProps<{}>

const Experiment = (props: ExperimentProps) => {
  const handleInput: FormEventHandler =  (e) => {
    console.log('input')
    console.log(e)
  }

  const handleChange: ChangeEventHandler = (e) => {
    console.log('change')
    console.log(e)
  }

  return (
    <div className={classnames(styles.experiment, props.className)}>
      <input onInput={handleInput} onChange={handleChange} />
    </div>
  )
}

export default Experiment
