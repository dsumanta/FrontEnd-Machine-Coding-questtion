const AddfolderNode = ()=>{
    const insertNode = (tree,folderId,name,isFolder)=>{
        if(tree.id===folderId && tree.isFolder){
            tree.items.unshift({
                id:new Date().getTime(),
                name:name,
                isFolder,
                items:[]
            })
            return tree
        }

        let latestNode=[];
        latestNode= tree.items.map((obj)=>{
            return insertNode(obj,folderId,name,isFolder)
        })
        return {...tree,item:latestNode}
    }
    return {insertNode}
}
export default AddfolderNode