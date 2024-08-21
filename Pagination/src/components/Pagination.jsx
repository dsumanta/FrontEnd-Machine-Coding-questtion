import React, { useState } from 'react'

const Pagination = ({ data }) => {
    const [pageNumbr, setPageNumber] = useState(1);
    const prevPage = () => {
        if (pageNumbr <= 1) {
            setPageNumber(10);
        }
        else {
            setPageNumber(pageNumbr-1)
        }
    }
    const nextPage = () => {
        if (pageNumbr === 10) {
            setPageNumber(1);
        }
        else {
            setPageNumber(pageNumbr + 1)
        }
    }
    return (
        <div>
            <div className=' min-w-full min-h-full overflow-scroll no-scrollbar flex flex-wrap'>{data.products.slice(pageNumbr*10-10, pageNumbr*10).map((item, index) => {
                return (
                    <div className=' bg-slate-100 m-1' key={index}>
                        <div className=' w-32 h-32'><img className=' object-scale-down h-full mix-blend-multiply' src={item.images[0]} alt={item.title} /></div>
                        <div className=' text-center w-32 text-ellipsis line-clamp-1'>{item.title}</div>
                    </div>
                )
            })}</div>
            <div className=' flex justify-center items-end gap-3'>
                <div onClick={() => prevPage()} className=' cursor-pointer'>◀</div>
                {[...Array(data.products.length / 10)].map((_, ind) => {
                    return <div onClick={()=>setPageNumber(ind+1)} className={`${pageNumbr===ind+1?"bg-blue-500 text-white rounded-lg transition-all":""} border-blue-700 px-3 py-1 cursor-pointer`} key={ind}>{ind + 1}</div>
                })}
                <div onClick={() => nextPage()} className=' cursor-pointer'>▶</div>
            </div>
        </div>
    )
}

export default Pagination