import './App.css'
import { Navbar, Header, Journey, Application, More, Goals, Footer } from './components'

const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <Header />
        <Journey />
        <Application />
        <More />
        <Goals />
        <Footer />
    </div>
  )
}

export default App