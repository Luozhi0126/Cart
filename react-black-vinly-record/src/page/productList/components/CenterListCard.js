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
function CenterList({ vinyls }) {
  // 加入蒐藏icon顯示切換
  // const [showIcon, setShowIcon] = useState(false);
  // const [showCarIcon, setShowCarIcon] = useState(false);
  //測試
  const [state, dispatch] = useContext(CartContext)
  // const [statea, dispatcha] = useReducer(
  //   (statea, action) => {
  //     return { ...statea, [action]: !statea[action] }
  //   },
  //   {
  //     0: false,
  //     1: false,
  //   }
  // )
  const [hobby, setHobby] = useState(false)
  return (
    <>
      {vinyls.map((product, i) => {
        return (
          <div className="a-centerArea col mb-10" key={product.sid}>
            <div className="a-productCardFs card h-100 ">
              <img
                src={`/img/products/vin/${product.vr_img}`}
                className="a-card-img-top w-100 h-50"
                alt="商品專輯"
              />
              <div className="a-productCard card-body p-0 m-2 list-unstyled">
                <Link to="/ProductDt" className="a-productAlbumName">
                  {product.vr_name}
                </Link>
                <div className="eddie">
                  <i className="h4 float-end">NT$ {product.vr_price}</i>
                  {/* {statea[i] ? (
                    <FcLike
                      size={30}
                      onClick={(e) => {
                        if (i == product.sid) {
                          dispatcha(product.sid)
                        }
                      }}
                    />
                  ) : (
                    <FcLikePlaceholder
                      size={30}
                      onClick={(e) => {
                        if (i == product.sid) {
                          dispatcha(product.sid)
                        }
                      }}
                    />
                  )} */}
                  <label htmlFor="hobby">
                    {hobby ? (
                      <FcLike size={30} />
                    ) : (
                      <FcLikePlaceholder size={30} />
                    )}
                  </label>
                  <input
                    id="hobby"
                    type="checkbox"
                    checked={hobby}
                    onClick={(e) => {
                      // setHobby(!e.target.hobby)
                      setHobby((old) => !old)
                    }}
                    hidden
                  />
                </div>
              </div>
              <div className="d-grid gap-2">
                <button
                  className="btn btn-info"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={(e) => {
                    dispatch({
                      type: 'ADD_TO_CART',
                      payload: {
                        ...product,
                        quantity: 1,
                      },
                    })
                    // alert(`已將 ${product.title} 加到購物車`);
                    Swal.fire({
                      title: '成功!',
                      text: `已將 ${product.title} 加到購物車`,
                      icon: 'success',
                      confirmButtonText: '確認',
                    })
                  }}
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default CenterList
