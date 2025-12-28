import './App.css'
import { ShowAndHide } from './components/AnimatedDiv/ShowAndHide'
import CounterFix from './components/CounterFix'
import WeatherContainer from './components/WeatherProgram/WeatherContainer'

function App() {

  return (
    <>
    {/* <CounterFix /> */}
    {/* <WeatherContainer /> */}
    <ShowAndHide>
      <div>Hey! Click me as fast as you can!</div>
    </ShowAndHide>
    </>
  )
}

export default App
