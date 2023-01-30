import { memo } from 'react'
import styles from './Home.module.scss'
import classnames from '../../utils/classnames'
import { CProps } from '@/types/CProps'

export type HomeProps = CProps<{}>

const Home = memo((props: HomeProps) => {
  console.log('home')

  return (
    <div className={classnames(styles.home, props.className)}>
      <header>home</header>
      <main>
      </main>
    </div>
  )
})

export default Home
