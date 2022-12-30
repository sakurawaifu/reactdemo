import styles from './Experiment.module.scss'
import { NavLink, useLoaderData } from 'react-router-dom'
import { LoaderResult } from './ExperimentLoader'
import { CProps } from '../../types/CProps'
import classnames from '../../utils/classnames'

export type ExperimentProps = CProps<{}>

const Experiment = (props: ExperimentProps) => {
  const loaderData = useLoaderData() as LoaderResult

  return (
    <div className={classnames(styles.experiment, props.className)}>
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
