import styles from './ErrorPage.module.scss'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.log(error)

  return (
    <div className={styles.errorPage}>
      页面出错
    </div>
  )
}
