import {fetchPhotos, fetchVideos} from './api/mediaApi'

const App = () => {

  
  return (
    <div className='h-screen text-white w-full bg-gray-950 '>
      <button className='bg-green-400 text-amber-50 p-5 m-7 rounded-2xl '
      onClick={async ()=>{
      const data=await fetchPhotos('dog')
      console.log(data.results);   
      } }>Get Photos</button>
     
      <button className='bg-green-400  p-5 m-7 rounded-2xl text-amber-50' onClick={async()=>{
        const data=await fetchVideos('cat')
        console.log(data.videos);
      }}>Get Videos</button>
    
    {/* <button className='bg-green-400  p-5 m-7 rounded-2xl text-amber-50' onClick={async()=>{
        const data=await fetchGIF('cat')
        console.log(data.data.results);
      }}>Get GIF
      </button>
     */}
    </div>
  )
}

export default App
