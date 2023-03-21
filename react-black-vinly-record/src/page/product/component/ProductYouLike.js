import React from 'react'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'

function ProductYouLike() {
  const [showIcon, setShowIcon] = React.useState(false)
  return (
    <>
      <div class="a-likeCard card">
      <img
            className="a-card-img-top w-100"
            src="/img/products/vin/01.jpg"
            alt="商品照"
          />
        <div className="a-likeCard card-body">
          <span className="a-likeCardLabel badge btn-success me-2">10吋</span>
          <span className="a-likeCardLabel badge btn-success me-2">
            華語/流行
          </span>
          <span className="a-likeCardLabel badge btn-success me-2">
            黑膠唱片
          </span>
          <div className="a-likeCardTitle card-title mt-5">
            2商品名稱:【音樂年華】日本宮崎駿日本動畫電影純輕天空之城
          </div>
          {showIcon ? (
            <FcLike size={25} onClick={() => setShowIcon(!showIcon)} />
          ) : (
            <FcLikePlaceholder
              size={25}
              onClick={() => setShowIcon(!showIcon)}
            />
          )}
          <i className="h4 float-end">$1990</i>
        </div>
      </div>
    </>
  )
}

export default ProductYouLike
