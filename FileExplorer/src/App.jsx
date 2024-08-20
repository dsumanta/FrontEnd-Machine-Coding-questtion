import { useState } from 'react'
import FileExprorer from './components/FileExprorer'
import FileInfo from './Data/fileData'

function App() {
  const [fileData,setFileDta]= useState(FileInfo)
  return (
    <div>
      <FileExprorer fileData= {fileData} />
    </div>
  )
}

export default App
