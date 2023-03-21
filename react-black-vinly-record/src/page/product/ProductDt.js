import React from 'react'
import ProductImgSm from './component/ProductImgSm'
import ProductZoom from './component/ProductZoom'
import ProductLabel from './component/ProductLabel'
import ProductBread from './component/ProductBread'
import ProductInfo from './component/ProductInfo'
import SellingPrice from './component/SellingPrice'
import ProductYouLike from './component/ProductYouLike'
import ProductEvaluate from './component/ProductEvaluate'
import Talk from './component/Talk'

function ProductDt() {
  return (
    <>
      <main className="a-main bg-dark">
        <div className="a-productInfo container ">
          <div className="row row-cols-3">
            <ProductImgSm />
            <div className="a-productDt col-4 text-center">
              <ProductZoom />
              <ProductLabel />
            </div>
            <div className="a-RightSide col-6 position-relative">
              <ProductBread />
              <ProductInfo />
              <SellingPrice />
            </div>
          </div>
        </div>
      </main>
      <main className="a-main bg-light">
        <div className="container ">
          <div className="row">
            <div className="col">
              <p className="h3">你可能還會喜歡</p>
              <div className="a-underLine mb-8" />
              <div class="a-swiper-slide d-flex gap-3">
                <ProductYouLike />
                <ProductYouLike />
              </div>
              <div className="a-underLine my-8" />
            </div>
          </div>
        </div>
      </main>
      <main className="a-main bg-light">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3">商品評價</p>
              <ProductEvaluate />
              <br />
              <Talk />
              <Talk />
              <Talk />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ProductDt
