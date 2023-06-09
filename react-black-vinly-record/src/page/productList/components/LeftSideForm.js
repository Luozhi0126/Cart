import React from 'react'
import { useState } from 'react'

function LeftSideForm() {
  // 以下測試
  const [setSearchKeyWord] = useState('')
  const displayInfo = () => {
    console.log('hello')
  }
  return (
    <>
      <form className="a-form form-filter">
        <label htmlFor="commoditySelect" className="a-menuLeftLabel">
          商品項目
        </label>
        <select
          className="form-select  form-select-sm"
          aria-label=".form-select-sm"
        >
          <option selected>黑膠唱片/黑膠音響/其他商品</option>
          <option value="record">黑膠唱片</option>
          <option value="audio">黑膠音響</option>
          <option value="other">其他商品</option>
        </select>
        <label htmlFor="musicSelect" className="a-menuLeftLabel">
          唱片分類
        </label>
        <select
          className="form-select  form-select-sm"
          aria-label=".form-select-sm"
        >
          <option selected>華語/西洋/演奏/原聲帶</option>
          <option value="chPop">華語/流行</option>
          <option value="EnPop">西洋/流行</option>
          <option value="country">鄉村/民謠</option>
          <option value="rock">搖滾/金屬</option>
          <option value="hitPop">嘻哈/饒舌</option>
          <option value="soundTrack">原聲帶</option>
        </select>
        <label htmlFor="audioSelect" className="a-menuLeftLabel">
          音響分類
        </label>
        <select
          className="form-select  form-select-sm"
          aria-label=".form-select-sm"
        >
          <option selected>國內/外黑膠音響品牌</option>
          <option value="brand1">品牌1</option>
          <option value="brand2">品牌2</option>
        </select>
        <label htmlFor="inputNumber" className="a-menuLeftLabel">
          依商品價格搜尋
        </label>
        <select
          className="form-select  form-select-sm"
          aria-label=".form-select-sm"
        >
          <option selected>定價金額</option>
          <option value="priceNum1">$0~999</option>
          <option value="priceNum2">$1000~2999</option>
          <option value="priceNum3">$3000~5999</option>
          <option value="priceNum3">$6000up</option>
        </select>
        <label htmlFor="inputText" className="a-keyWord form-label">
          依關鍵字搜尋
        </label>
        <input type="text" className="a-keyWord form-control" id="keyWord" />
        {/* onchange={(e) => setSearchKeyWord(e.target.value)} */}
        <div className="a-menuLeft-btn d-grid mt-3">
          <button
            onClick={displayInfo}
            type="button"
            className="a-menuLeft-btn btn-secondary h5 mt-3"
          >
            搜尋
          </button>
        </div>
      </form>
    </>
  )
}

export default LeftSideForm
