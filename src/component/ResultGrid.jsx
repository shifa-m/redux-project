import { useDispatch, useSelector } from 'react-redux'
import {fetchPhotos,fetchVideos} from '../api/mediaApi'
import {setQuery,setLoading,setError,setResults} from '../redux/features/searchSlice'
import { useEffect } from 'react'

const ResultGrid = () => {

    const dispatch=useDispatch()
    const {query,activeTab,results,loading,error}  =   
    useSelector((store)=>store.search) 
    
   
  useEffect(function(){

    const getData =async () =>{
    
    try {
      dispatch(setLoading())
      let data=[]
    if(activeTab == 'photos'){
      let response=await fetchPhotos(query)
      data=response.results.map((item)=>({
   id :item.id,
   type:'photo',
   title:item.alt.description,
   thumbnail:item.urls.small,
   src:item.urls.full
      }))

    }
    if(activeTab == 'videos'){
      let response=await fetchVideos(query)
      data=response.videos.map((item)=>({
        id:item.id,
        type:'video',
        title:item.user||'video',
        thumbnail:item.image,
        src:item.video_files[0].link
      }

      ))
    }
    dispatch(setResults(data))
    }
    catch (err) {
      dispatch(setError(err))
      
    }
  }
    getData()
  },[query,activeTab])


  return (
    <div>
    </div>
  )
}


export default ResultGrid
