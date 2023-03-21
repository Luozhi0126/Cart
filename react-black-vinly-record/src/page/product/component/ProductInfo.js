import React from 'react'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'

function ProductInfo() {
  const [showIcon, setShowIcon] = React.useState(false)
  return (
    <>
      <div className="a-productList text-28-400">
        <p className="position-absolute text-end end-0  translate-middle-x">
          {showIcon ? (
            <FcLike size={25} onClick={() => setShowIcon(!showIcon)} />
          ) : (
            <FcLikePlaceholder
              size={25}
              onClick={() => setShowIcon(!showIcon)}
            />
          )}
          加入蒐藏
        </p>
        <h3 className="a-productName">鄧紫棋/ 啓示錄 (正式版2CD)</h3>
        <ul className="a-productList text-18-700">
          <li>
            商品編號：
            <h5 className="d-inline">1234422</h5>
          </li>
          <li>
            商品尺寸：
            <h5 className="d-inline">10吋</h5>
          </li>
          <li>
            音樂類型：
            <h5 className="d-inline">華語/流行</h5>
          </li>
          <li>
            發行日期：
            <h5 className="d-inline">2017/5/8</h5>
          </li>
          <li>
            發行公司：
            <h5 className="d-inline">華納音樂</h5>
          </li>
          <li>
            商品數量：
            <h5 className="d-inline">20</h5>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ProductInfo
