import styles from './Temp.module.scss'
import BasePropsType from '../../ts_define/BasePropsType'
import clsmix from '../../utils/clsmix'
import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'

export type TempProps = BasePropsType & {}

const Temp = (props: TempProps) => {
  console.log(styles)

  const count = useContext(ThemeContext)

  return (
    <div className={clsmix(styles.tempComp, props.className)}>
      temp
      <div className={styles.tempConsumer}>
        {count}
      </div>
    </div>
  )
}

export default Temp
