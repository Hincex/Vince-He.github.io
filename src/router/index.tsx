import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Test from '../pages/Test'

const RouterView = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </HashRouter>
  )
}

export default RouterView
