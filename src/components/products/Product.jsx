import React, { useState, useEffect } from 'react'
import "./Product.css";
import ProductModal from './product-modal';
import { LiaCartPlusSolid } from "react-icons/lia";
import { LiaSpinnerSolid } from "react-icons/lia";
import axios from 'axios'
import { Link } from 'react-router-dom';
const API_URL = "https://dummyjson.com"
const Product = () => {
  
    const [products, setProducts] = useState(null)
    const [categories, setCategories] = useState(null)
    const [selectCategory, setSelectCategory] = useState("")
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0)
    const [onset, setOnset] = useState(1)
    const [oneItem, setOneItem] = useState(null)
    const limit = 6

    useEffect(()=>{
        axios
        .get(`${API_URL}/products/category-list`)
        .then(res => setCategories(res.data))
        .catch(err => console.log(err))
    },[])
    console.log(categories);
    console.log(selectCategory);
    
    

    useEffect(() => {
        setLoading(true)
        axios
            .get(`${API_URL}/products${selectCategory}`,{
                params:{
                    limit: limit * onset
                }
            })
            .then(res => {
                console.log(res.data);
                setTotal(res.data.total);
                setProducts(res.data.products)
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
    }, [onset, selectCategory])
    
    
    const productItem = products?.map((product) => (
        <div key={product.id} className='w-72 p-3 api flex relative flex-col gap-4 items-center justify-center rounded-lg'>
            <img src={product.images[0]} alt="" className='w-full h-52 object-contain hover:scale-105 ' onClick={()=>setOneItem(product)}/>
            <div className='flex flex-col gap-3 ml-2'>
                <Link to = {`/product/${product.id}`}>
                <h3 className='text-start ml-3 text-xl font-semibold'>{product.brand}</h3>
                </Link>
                <p className='text-red-500 text-sm font-medium ml-2'>12%</p>
                <p className='desck'>{product.description}</p>
                <p className=' w-20 text-base font-semibold ml-2 rounded-2xl p-1 bg-slate-100'>${product.price}</p>
            </div>
            <button className=' button w-12 border rounded-full bg-emerald-300 p-1 text-xs text-slate-100'>New</button>
            <button className='btr w-9 h-9 rounded-full border-none bg-yellow-400 '><LiaCartPlusSolid className='text-slate-100 text-2xl m-auto' /></button>
        </div>
    ))
    const categoryItems = categories?.map(item =>(
        <option key={item} value={`/category/${item}`}>{item}</option>
    ))
 
    return (
        <div className='container w-5/7 mb-16'>
            <div className="mt-4">
            <select value={selectCategory} onChange={e => setSelectCategory(e.target.value)} name="" id="" className='overflow-none' >
             <option value="" >All</option>
             {categoryItems}
             </select>
            </div>
            <div className="flex item-center justify-center">
            {loading && <h2 className='text-7xl items-center justify-center'><LiaSpinnerSolid /></h2>}
            </div>
            <div className='flex gap-3 flex-wrap items-center justify-center'>
                { productItem}
            </div>

            {
                limit * onset <= total &&
                <button onClick={() => setOnset(p => p + 1)} className='py-2 px-6 border rounded-md block mx-auto mt-5 bg-emerald-300 text-slate-100 text green'>See more</button>
            }
            {
                oneItem &&
                <ProductModal oneItem={oneItem} setOneItem={setOneItem} />
            }
        </div>

    )
}

export default Product