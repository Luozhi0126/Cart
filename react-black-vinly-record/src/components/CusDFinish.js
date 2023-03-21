import React, { useState, useEffect } from 'react'

function CusDFinsh({
  dataFromChildBUpload,
  dataFromChildCImg,
  setDataFromChildBUpload,
  setDataFromChildCImg,
  setDataFromChildDFinish,
}) {
  //預備傳給父元素的值
  const [fData, setFData] = useState(null)

  const handleToCart = (e) => {
    if (!dataFromChildBUpload) {
      alert('請返回第二步選擇一張照片製作唱片封面')
      window.location.assign('/Customization#second-step')
      return
    }
    if (!dataFromChildCImg) {
      alert('請返回第三步選擇包裝材質')
      window.location.assign('/Customization#third-step')
      return
    }
    setFData([dataFromChildBUpload, dataFromChildCImg])
    alert(
      `已成功加入購物車，您的音樂作品報價為 NT$ ${
        dataFromChildBUpload.cus_price + dataFromChildCImg.mat_price ||
        dataFromChildBUpload[0].cus_price + dataFromChildCImg.mat_price
      }，\n請至購物車查看商品並完成付款。`
    )
    window.location.assign('/Customization')
  }

  useEffect(() => {
    setDataFromChildDFinish(fData)
  }, [fData])

  if (dataFromChildBUpload && dataFromChildBUpload.length > 0) {
    console.log(dataFromChildBUpload[0].cus_price)
  }

  console.log('dataFromChildBUpload', dataFromChildBUpload)
  console.log('dataFromChildCImg', dataFromChildCImg)

  return (
    <div className="t-card-group">
      {/* <!-- 左邊選單 --> */}
      {/* <!-- 手機 --> */}
      <div className="d-flex position-relative justify-content-end d-lg-none">
        <img
          className="t-cus-4"
          src="/img/card/Still Waters Run Deep.jpg"
          alt="Still Waters Run Deep"
          width="140"
        />
        <img src="/img/card/vinly.png" alt="vinly" width="140" />
      </div>

      {/* <!-- 電腦 --> */}
      <div className="d-none d-lg-flex col-lg-6 mx-lg-8 position-relative justify-content-end">
        {dataFromChildCImg ? (
          <img
            className="t-cus-4-material"
            src={`/img/card/material/${dataFromChildCImg.mat_image}`}
            alt={dataFromChildCImg.mat_name}
          />
        ) : (
          <img
            className="t-cus-4-material"
            src={`/img/card/material/${dataFromChildCImg}`}
            alt=""
          />
        )}

        {dataFromChildBUpload && dataFromChildBUpload.cus_image ? (
          <img
            className="t-cus-4"
            src={`/img/card/${dataFromChildBUpload.cus_image}`}
            alt={dataFromChildBUpload.cus_name}
          />
        ) : dataFromChildBUpload ? (
          <img
            className="t-cus-4"
            src={dataFromChildBUpload[1]}
            alt={dataFromChildBUpload[1]}
          />
        ) : (
          <img
            className="t-cus-4"
            src={`/img/card/${dataFromChildBUpload}`}
            alt=""
            width="500"
          />
        )}

        <img src="/img/card/vinly.png" alt="vinly" width="500" />
      </div>

      {/* <!-- 右邊選單 --> */}
      <div className="col-lg-6 text-center">
        {/* <!-- 手機 --> */}
        <div className="d-lg-none">
          <h3 className="mt-6 mb-0">FINISHED</h3>
          <h5>您的音樂作品報價為</h5>
          {/* <h2 className="my-8 text-info">NT$ {dataFromChildBUpload[5]}</h2> */}
        </div>

        {/* <!-- 電腦 --> */}
        <div className="d-none d-lg-block">
          <h1>FINISHED</h1>
          <h2>您的音樂作品報價為</h2>
          <h1 className="my-12 text-info fw-bold">
            {
              //計算預設照片費用
              dataFromChildBUpload &&
              dataFromChildBUpload.cus_image &&
              dataFromChildCImg
                ? `NT$ ${
                    dataFromChildBUpload.cus_price + dataFromChildCImg.mat_price
                  }`
                : //計算上傳照片費用
                dataFromChildBUpload &&
                  dataFromChildBUpload.length > 0 &&
                  dataFromChildCImg
                ? `NT$ ${
                    dataFromChildBUpload[0].cus_price +
                    dataFromChildCImg.mat_price
                  }`
                : '開始打造您的黑膠唱片'
            }
          </h1>
        </div>

        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success px-5 py-4 d-flex"
            onClick={handleToCart}
          >
            <h4 className="mb-0 d-lg-none">放入購物車</h4>
            <h3 className="mb-0 d-none d-lg-block">放入購物車</h3>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CusDFinsh
