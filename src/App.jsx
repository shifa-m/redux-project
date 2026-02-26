
import { Routes,Route } from 'react-router-dom'
import CollectionPage from './pages/CollectionPage'
import HomePages from './pages/HomePages'
import Navbar from './component/Navbar'
import { ToastContainer} from 'react-toastify';

const App = () => {
    
  
  
  return (
    <div className='min-h-screen text-white w-full bg-gray-950 '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePages/>}/>
        <Route path='/collection' element={<CollectionPage/>}/>
      </Routes>
      <ToastContainer/>
     
    </div>
  )
}

export default App
