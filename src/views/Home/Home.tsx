import styles from './Home.module.scss'
import React from 'react'
import classnames from '../../utils/classnames'
import { CProps } from '../../types/CProps'

export type HomeProps = CProps<{}>

const Home = React.memo((props: HomeProps) => {
  return (
    <div className={classnames(styles.home, props.className)}>
      <header>home</header>
      <main>

      </main>
    </div>
  )
})

export default Home
