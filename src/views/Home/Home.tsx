import styles from './Home.module.scss'
import React from 'react'
import clsmix from '../../utils/clsmix'
import BasePropsType from '../../constant/type/BasePropsType'

export type HomeProps = BasePropsType & {}

const Home = React.memo((props: HomeProps) => {
  return (
    <div className={clsmix(styles.home, props.className)}>
      <header>home</header>
      <main>

      </main>
    </div>
  )
})

export default Home
