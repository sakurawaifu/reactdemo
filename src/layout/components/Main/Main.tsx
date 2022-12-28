import styles from './Main.module.scss'
import BasePropsType from '../../../constant/type/BasePropsType'
import clsmix from '../../../utils/clsmix'
import React, { useContext } from 'react'
import ThemeContext from '../../../context/ThemeContext'
import Mode from '../../../constant/data/theme/Mode'
import classname from '../../../utils/classname'
import { Outlet } from 'react-router-dom'

export type MainProps = BasePropsType & {}

const Main = React.memo((props: MainProps) => {
  const { theme } = useContext(ThemeContext)
  const isNightMode = theme.mode === Mode.NIGHT

  return (
    <div
      className={clsmix(classname({
        [styles.main]: true,
        [styles.nightMode]: isNightMode
      }), props.className)}
    >
      <Outlet></Outlet>
    </div>
  )
})

export default Main
