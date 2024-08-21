import { useEffect, useState } from 'react'
import './App.css'
import Pagination from './components/Pagination'

function App() {
  const [data,setData] = useState()
const fetchData = async ()=>{
  const res= await fetch("https://dummyjson.com/products?limit=100")
  const resData= await res.json();
  setData(resData);
}

  useEffect(()=>{
    fetchData()
  },[])
  
  return (
    <div>
      {data && <Pagination data={data}/>}
    </div>
  )
}

export default App
