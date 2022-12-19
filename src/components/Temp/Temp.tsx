import styles from './Temp.module.scss'
import BasePropsType from '../../ts_define/BasePropsType'
import clsmix from '../../utils/clsmix'
import React from 'react'

export type TempProps = BasePropsType & {}

const Temp = (props: TempProps) => {
  console.log(styles)
  return (
    <div className={clsmix(styles['temp-comp'], props.className)}>
      temp
    </div>
  )
}

export default Temp
