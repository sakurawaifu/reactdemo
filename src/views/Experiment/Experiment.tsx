import styles from './Experiment.module.scss'
import { CProps } from '@/types/CProps'
import classnames from '@/utils/classnames'

export type ExperimentProps = CProps<{}>

const Experiment = (props: ExperimentProps) => {
  console.log('experiment')

  return (
    <div className={classnames(styles.experiment, props.className)}>
      <header>experiment</header>
    </div>
  )
}

export default Experiment
