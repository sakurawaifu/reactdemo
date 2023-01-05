import styles from './Main.module.scss'
import { memo } from 'react'
import classnames from '../../../utils/classnames'
import { Outlet } from 'react-router-dom'
import useIsNightMode from '../../../hooks/theme/useIsNightMode'
import { CProps } from '@/types/CProps'

export type MainProps = CProps<{}>

const Main = memo((props: MainProps) => {
  const isNightMode = useIsNightMode()

  return (
    <main
      className={classnames(
        props.className,
        styles.main,
        { [styles.nightMode]: isNightMode }
      )}
    >
      <Outlet></Outlet>
    </main>
  )
})

export default Main
