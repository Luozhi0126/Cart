import React from 'react'
import { MdSkipPrevious, MdSkipNext, MdFireTruck } from 'react-icons/md'
import ProductBtn from './ProductBtn'

function SellingPrice() {
  return (
    <>
      <div className="a-productList">
        <h4 className="d-inline">商品售價 NT</h4>
        <span className="a-price h3">
          <em>$1990</em>
        </span>
        <li className="list-unstyled small p-2" />
        <img src="/svg/eleven.svg" width="25px" height="25px" />
        <p className="a-locationList d-inline" />
        可取貨點：台灣、蘭嶼、綠島、澎湖、金門、馬祖
        <li className="list-unstyled small p-2" />
        <MdFireTruck size={25} />
        <p className="a-locationList d-inline" />
        可取貨點：台灣、蘭嶼、綠島、澎湖、金門、馬祖
        <ProductBtn />
        <div className="a-productDes text-center p-2">
          <ul className="list-unstyled text-warning">
            <MdSkipPrevious size={30} />
            <i className="productText">商品簡介</i>
            <MdSkipNext size={30} />
            <p className="a-productDescription text-18-400">
              當多彩的生活失去了顔色，她的心該如何保持燦爛？當璀璨的世界變成一片廢土，她又能在哪裡重拾希望？她絕望地來到自己的盡頭，
              才發現那是通往自由的一扇門。經過潛心閉關，
              G.E.M.鄧紫棋終於帶來2022年全新創作專輯《啓示錄》，帶我們踏上這條關於愛的啓示之路。
            </p>
          </ul>
        </div>
        <div className="a-vr_tracks text-center">
          <ul className="list-unstyled text-warning">
            <MdSkipPrevious size={30} />
            <i className="a-productText">收錄曲目</i>
            <MdSkipNext size={30} />
            <li className="a-trackList list-unstyled text-18-400">
              01少年與海 <br />
              02HELL 01少年與海 <br />
              02HELL
              <br /> 03只有我和你的地方
              <br /> 04你不是第一個離開的人
              <br />
              05不想回家
              <br /> 06冰河時代
              <br /> 07受難曲
              <br /> 08GLORIA
              <br /> 09老人與海
              <br /> 10FIND YOU
              <br />
              11離心力
              <br /> 12讓世界暫停一分鐘
              <br /> 13夜的盡頭
              <br /> 14天空沒有極限
              <br />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SellingPrice
