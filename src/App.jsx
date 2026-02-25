
import { Routes,Route } from 'react-router'
import CollectionPage from './pages/CollectionPage'
import HomePages from './pages/HomePages'
import Navbar from './component/Navbar'

const App = () => {
    
  
  
  return (
    <div className='min-h-screen text-white w-full bg-gray-950 '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePages/>}/>
        <Route path='/collection' element={<CollectionPage/>}/>
      </Routes>
     
    </div>
  )
}

export default App
