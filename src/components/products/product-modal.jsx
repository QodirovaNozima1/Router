import React from "react";

const ProductModal = ({oneItem, setOneItem}) =>{
    return(
        <>
        <div onClick={() => setOneItem(null)} className="fixed top-0 left-0 w-full h-screen bg-[#0005]"></div>
        <div className="p-7 fixed gap-6 flex items-center justify-center top-[10%] left-[30%] bg-white  w-[600px] min-h-[300px] translate-x-[50%] translate-y-[50%] animation-modal">
            <div className="w-[50%] items-center border-red-800">
            <img src={oneItem.thumbnail} alt="" className="w-[100%]" />
            </div>
            <div className="w-[50%] items-center"> 
                <h2 className="text-2xl font-medium pb-3 mt-5">{oneItem.title}</h2>
                <p>{oneItem.description}</p>
                <br />
                <div className="flex justify-between border-b-2 pb-3">
                <h3 className="text-lg text-rose-700">{oneItem.brand}</h3>
                <h3 className="text-lg ">{oneItem.category}</h3>
                </div>
                <div className="flex justify-between mt-8 border-b-2 pb-3">
                <p className=" text-lg text-yellow-200"><i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>{oneItem.rating}</p>
                <p className="text-red-600 text-2xl"><i class="fa-solid fa-heart"></i></p>
                </div>
                <div className="flex justify-between items-center mt-12">
                <button onClick={()=> setOneItem(null)} className="bg-slate-300  p-2 rounded-2xl">Close</button>
                <p className="rounded-full bg-stone-100 p-4 hover:bg-slate-300 .4s "><i class="fa-solid fa-plus"></i></p>
                </div>
            </div>
        </div>
        </>
    )
}
export default ProductModal