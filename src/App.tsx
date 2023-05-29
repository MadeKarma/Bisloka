import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Index'
import MySlider from './component/Slider'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/slider' element={<MySlider />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
