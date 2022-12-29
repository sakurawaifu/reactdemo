import styles from './Experiment.module.scss'
import BasePropsType from '../../constant/type/BasePropsType'
import clsmix from '../../utils/clsmix'

export type ExperimentProps = BasePropsType & {}

const Experiment = (props: ExperimentProps) => {
  return (
    <div className={clsmix(styles.experiment, props.className)}>
      experiment
    </div>
  )
}

export default Experiment
