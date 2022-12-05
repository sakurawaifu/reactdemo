import './Home.scss'
import Temp from '../../components/Temp/Temp'
import Experiment from '../../components/Experiment/Experiment'

export default function Home() {

  return (
    <div className="home">
      <header>home</header>
      <Temp></Temp>
      <Experiment className="experiment"></Experiment>
    </div>
  )
}
