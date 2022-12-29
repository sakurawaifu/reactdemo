import styles from './Experiment.module.scss'
import BasePropsType from '../../constant/type/BasePropsType'
import clsmix from '../../utils/clsmix'
import { NavLink, useLoaderData } from 'react-router-dom'
import { LoaderResult } from './ExperimentLoader'

export type ExperimentProps = BasePropsType & {}

const Experiment = (props: ExperimentProps) => {
  const loaderData = useLoaderData() as LoaderResult

  return (
    <div className={clsmix(styles.experiment, props.className)}>
      <header>experiment</header>
      <div>{'loader data: ' + loaderData}</div>
      <ul>
        <li>
          <NavLink to={'/experiment'}>experiment</NavLink>
        </li>
        <li>
          <NavLink to={'/'}>home</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Experiment
