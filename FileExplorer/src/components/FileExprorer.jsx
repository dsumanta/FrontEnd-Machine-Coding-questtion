import { useState } from "react";

function FileExprorer({ fileData }) {
  const [openExplorer, setOpneExplore] = useState(false);
  return (
    <div className=" cursor-pointer">
      {fileData.isFolder ? (
        <div>
          <div
            onClick={() => setOpneExplore((prev) => !prev)}
            className=" bg-slate-300 px-4 py-1 w-fit border border-spacing-1 rounded-lg"
          >
            📁 {fileData.name}
            <span className=" m-6">
              <button className=" mx-2 p-1 bg-white">File +</button>
              <button className=" mx-2 p-1 bg-white">Folder +</button>
            </span>
          </div>

          <div className={` ms-5 ${openExplorer ? "block" : "hidden"}`}>
            {fileData.items.map((items, index) => {
              return (
                <div key={index}>
                  <FileExprorer fileData={items} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className=" bg-red-300 px-4 py-1 w-fit border border-spacing-1">
          🗒️ {fileData.name}
        </div>
      )}
    </div>
  );
}

export default FileExprorer;
