import { useSelector } from 'react-redux'
import SearchBar from '../component/Searchbar'
import Tabs from '../component/Tabs'
import ResultGrid from '../component/ResultGrid'

const HomePages = () => {
            const { query } =
    useSelector((store) => store.search)
  return (
    <div>
            
      <SearchBar />

      {query != ''?<div><Tabs/>
     
     <ResultGrid/></div>:''}
    </div>
  )
}

export default HomePages
