import styles from './Home.module.scss'
import Counter from '../../components/Counter/Counter'
import React, { useState } from 'react'
import Temp from '../../components/Temp/Temp'
import { Button } from 'antd'
import useVisible from '../../hooks/useVisible'
import ThemeContext from '../../context/ThemeContext'
import clsmix from '../../utils/clsmix'
import BasePropsType from '../../ts_define/BasePropsType'

export type HomeProps = BasePropsType & {}

const Home = (props: HomeProps) => {
  const [
    visible,
    {
      toggle
    }
  ] = useVisible(false)

  const [count, setCount] = useState(0)
  const handleChange = (v: number) => {
    setCount(v)
  }

  return (
    <div className={clsmix(styles.home, props.className)}>
      <header>home</header>
      <main>
        <Counter onChange={handleChange}></Counter>
        <Button onClick={toggle}>toggle</Button>
        {visible && <ThemeContext.Provider value={count}>
          <Temp></Temp>
        </ThemeContext.Provider>}
      </main>
    </div>
  )
}
export default Home
