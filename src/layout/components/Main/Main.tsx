import styles from './Main.module.scss'
import BasePropsType from '../../../constant/type/BasePropsType'
import clsmix from '../../../utils/clsmix'
import React from 'react'
import classname from '../../../utils/classname'
import { Outlet } from 'react-router-dom'
import useIsNightMode from '../../../hooks/theme/useIsNightMode'

export type MainProps = BasePropsType & {}

const Main = React.memo((props: MainProps) => {
  const isNightMode = useIsNightMode()

  return (
    <main
      className={clsmix(classname({
        [styles.main]: true,
        [styles.nightMode]: isNightMode
      }), props.className)}
    >
      <Outlet></Outlet>
    </main>
  )
})

export default Main
