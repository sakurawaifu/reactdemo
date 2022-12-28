import styles from './Home.module.scss'
import React from 'react'
import clsmix from '../../utils/clsmix'
import BasePropsType from '../../constant/type/BasePropsType'
import Temp from '../../components/Temp/Temp'

export type HomeProps = BasePropsType & {}

const Home = React.memo((props: HomeProps) => {
  return (
    <div className={clsmix(styles.home, props.className)}>
      <header>home</header>
      <main>
        <Temp></Temp>
      </main>
    </div>
  )
})

export default Home
