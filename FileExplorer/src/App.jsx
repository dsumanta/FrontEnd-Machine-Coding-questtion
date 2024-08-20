import { useState } from 'react'
import FileExprorer from './components/FileExprorer'
import FileInfo from './Data/fileData'
import AddfolderNode from './hooks/AddFolderNode'

function App() {
  const [fileData,setFileDta]= useState(FileInfo)
  const {insertNode}= AddfolderNode();
  const handleInsertNode = (folderId,name,isFolder)=>{
     insertNode(fileData,folderId,name,isFolder)
  }
  return (
    <div>
      <FileExprorer handleInsertNode={handleInsertNode} fileData= {fileData} />
    </div>
  )
}

export default App
