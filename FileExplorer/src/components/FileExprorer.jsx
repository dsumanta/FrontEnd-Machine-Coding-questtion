import { useState } from "react";

function FileExprorer({ fileData,handleInsertNode=()=>{},handleDeletNode=()=>{} }) {
  const [openExplorer, setOpneExplore] = useState(false);
  const [showInput,setShowInput] = useState({
    visibility:false,
    isFolder:false
  })
  const onFolderCreate = (e,isFolder)=>{
    e.stopPropagation()
    setOpneExplore(true)
    setShowInput({...showInput,visibility:true,isFolder:isFolder})
  }
  const onDeleteFolder = (e)=>{
    e.stopPropagation()
    handleDeletNode(fileData.id)
    setShowInput({...setShowInput,visibility:false})
  }
  const addFolder = (e)=>{
      if(e.keyCode===13 && e.target.value){
        handleInsertNode(fileData.id,e.target.value,showInput.isFolder)
        setShowInput({...showInput,visibility:false})
      }
  }
  return (
    <div className=" cursor-pointer">
      { fileData.id && fileData.isFolder ? (
        <div>
          <div
            onClick={() => setOpneExplore((prev) => !prev)}
            className=" bg-slate-300 px-4 py-1 w-fit border border-spacing-1 rounded-lg"
          >
            📁 {fileData.name}
            <span className=" m-6">
              <button onClick={(e)=>onFolderCreate(e,false)} className=" mx-2 p-1 bg-white">File +</button>
              <button  onClick={(e)=>onFolderCreate(e,true)} className=" mx-2 p-1 bg-white">Folder +</button>
              <button  onClick={(e)=>onDeleteFolder(e)} className=" mx-2 p-1 bg-white">Delete</button>

            </span>
          </div>

          <div className={` ms-5 ${openExplorer ? "block" : "hidden"}`}>
            {
              showInput.visibility && ( <div>
                 <span>
                  {showInput.isFolder?"📁":"📄"}
                  <input 
                   type="text"
                   className=" "
                   autoFocus
                   onKeyDown={addFolder}
                   onBlur={()=>setShowInput({...showInput,visibility:false})}
                   />
                 </span>
              </div> )
            }
            {fileData.items.map((items, index) => {
              return (
                <div key={index}>
                  <FileExprorer fileData={items} handleInsertNode={handleInsertNode} handleDeletNode={handleDeletNode} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        fileData.id && <div className=" bg-red-300 px-4 py-1 w-fit border border-spacing-1">
        <span>
        🗒️  {fileData.name}
        <button  onClick={(e)=>onDeleteFolder(e)} className=" mx-2 p-1 bg-white">Delete</button>
        </span>
      </div>
      )}
    </div>
  );
}

export default FileExprorer;
