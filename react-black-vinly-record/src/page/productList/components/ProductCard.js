// 商品列表卡片 from </VrList>
import { Link } from 'react-router-dom'

// 頁面使用到之icon元件
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'

import { useContext, useState } from 'react'
import { CartContext } from '../../../store'

import Swal from 'sweetalert2'
function ProductCard({ product }) {
  const [dispatch] = useContext(CartContext)

  const [hobby, setHobby] = useState(false)
  return (
    <>
      <div className="a-centerArea col mb-10">
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

              <label htmlFor={'h' + product.sid}>
                {hobby ? <FcLike size={30} /> : <FcLikePlaceholder size={30} />}
              </label>
              <input
                id={'h' + product.sid}
                type="checkbox"
                checked={hobby}
                onClick={(e) => {
                  console.log({ hobby, product })
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
                Swal.fire({
                  title: '成功!',
                  text: `已將 ${product.vr_name} 加到購物車`,
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
    </>
  )
}

export default ProductCard
