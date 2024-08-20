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

    const deleteNode = (tree,folderId)=>{
        if(tree.id===folderId){
            delete tree.id
            return tree
        }
        let latestNode=[];
        latestNode= tree.items.map((obj)=>{
            return deleteNode(obj,folderId)
        })
        return {...tree,item:latestNode}
    }

    return {deleteNode,insertNode}
}
export default AddfolderNode