import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Posts from './pages/Posts'
import PostDetails from './pages/PostDetails'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/:id' element={<PostDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App