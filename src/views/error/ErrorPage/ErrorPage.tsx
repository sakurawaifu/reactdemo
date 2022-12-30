import styles from './ErrorPage.module.scss'
import { useRouteError } from 'react-router-dom'
import { CProps } from '../../../types/CProps'
import classnames from '../../../utils/classnames'

export type ErrorPageProps = CProps<{}>

const ErrorPage = (props: ErrorPageProps) => {
  const error = useRouteError()
  console.error(error)

  return (
    <div className={classnames(props.className, styles.errorPage)}>
      页面出错
    </div>
  )
}

export default ErrorPage
