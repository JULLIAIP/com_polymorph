
import { Button } from './components/Button'
import './style/global.css'


function App() {

  return (
    <div>
      <Button>Create Account</Button>

      {/* Botao que vai assumir a forma do filho */}
      <Button asChild><a href=''>NAV</a></Button></div>
  )
}

export default App
