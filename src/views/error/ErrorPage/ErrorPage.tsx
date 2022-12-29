import styles from './ErrorPage.module.scss'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div className={styles.errorPage}>
      页面出错
    </div>
  )
}

export default ErrorPage
