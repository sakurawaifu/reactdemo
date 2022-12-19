import './Home.scss'
import Counter from '../../components/Counter/Counter'
import Temp from '../../components/Temp/Temp'

const Home = () => {
  const handleChange = (v: number) => {
    console.log(v)
  }

  return (
    <div className="home">
      <header>home</header>
      <main>
        <Counter onChange={handleChange}></Counter>
        <Temp></Temp>
      </main>
    </div>
  )
}
export default Home
