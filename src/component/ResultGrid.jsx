import { useSelector } from 'react-redux'
import {fetchPhotos,fetchVideos} from '../api/mediaApi'
import {setQuery,setLoading,setError,setResults} from '../redux/features/searchSlice'
import { useEffect } from 'react'

const ResultGrid = () => {

    const {query,activeTab,results,loading,console,error}  =   
    useSelector((store)=>store.search) 
    
   const getData =async () =>{
    
    let data
    if(activeTab == 'photos'){
      data=await fetchPhotos(query)

    }
    if(activeTab == 'videos'){
      data=await fetchVideos(query)
    }
    }
   

  return (
    <div>
      <button  onClick ={getData}>Get Data</button>
    </div>
  )
}


export default ResultGrid
