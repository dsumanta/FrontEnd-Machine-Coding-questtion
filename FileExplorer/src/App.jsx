import { useState } from 'react'
import FileExprorer from './components/FileExprorer'
import FileInfo from './Data/fileData'
import AddfolderNode from './hooks/AddFolderNode'

function App() {
  const [fileData,setFileDta]= useState(FileInfo)
  const {deleteNode,insertNode}= AddfolderNode();
  const handleInsertNode = (folderId,name,isFolder)=>{
     insertNode(fileData,folderId,name,isFolder)
  }
  const handleDeletNode= (folderId)=>{
    deleteNode(fileData,folderId)
  }
  return (
    <div>
      <FileExprorer handleInsertNode={handleInsertNode} handleDeletNode={handleDeletNode} fileData= {fileData} />
    </div>
  )
}

export default App
