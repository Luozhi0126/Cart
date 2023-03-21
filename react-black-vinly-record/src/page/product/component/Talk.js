import React from 'react'
import { BsStarFill } from 'react-icons/bs'

function Talk() {
  return (
    <>
      <div className="a-feedback card">
        <div className="row">
          <div className="col-2 text-center mt-6">
          <img
            className="a-talkImg rounded-circle border border-5"
            src="/img/products/vin/01.jpg"
            alt="商品照"
          />
          </div>
          <div className="col-9">
            <ul className="mt-2 h5 list-unstyled">
              <li className="#">Jh*****na</li>
              <li className="a-starIcon">
                <BsStarFill />
              </li>
              <li>
                留言日期:
                <span /> 2023-01-01
              </li>
              <li>
                留言內容:
                <span />
                唱片真的好好聽喔
              </li>
            </ul>
            <div className="a-storeBoss mb-5">
              <p />
              賣家回應:
              <p />
              很開心您購買到喜歡的商品💖給您優質的服務是我們必須要做到的🔥
              期待能再次為您服務哦❤希望您之後也能繼續支持我們🥰⚡
              歡迎持續關注我們賣場與追蹤IG： black_record033，
              不定期會有新品資訊和限定優惠哦😍💗！
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Talk
