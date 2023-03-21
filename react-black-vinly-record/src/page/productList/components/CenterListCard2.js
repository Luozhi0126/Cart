// 商品列表卡片 from </VrList>
import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'

// 頁面使用到之icon元件
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
// import { MdShoppingCartCheckout, MdShoppingCart } from "react-icons/md";

//測試
import { useContext, useState } from 'react'
import { CartContext } from '../../../store'
import productsData from '../../../assets/productsData'
import Swal from 'sweetalert2'
import ProductCard from './ProductCard'
function CenterList({ vinyls }) {
  // const [state, dispatch] = useContext(CartContext)

  return (
    <>
      {vinyls.map((product, i) => (
        <ProductCard product={product} key={i} />
      ))}
    </>
  )
}

export default CenterList
