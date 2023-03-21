import React, { useEffect, useState } from 'react'
import LeftSideForm from './components/LeftSideForm'
import Top5List from './components/Top5List'
import CenterNav from './components/CenterNav'
import CenterListCard2 from './components/CenterListCard2'
import Arrangement from './components/Arrangement'
import { ALL_VR_DATA } from '../api_config'
import axios from 'axios'

function VrList() {
  const [allvinyldata, setAllVinylData] = useState({
    vinyls: [],
  })
  const getAllVinylData = async () => {
    const response = await axios.get(ALL_VR_DATA, {
      params: {},
    })
    setAllVinylData(response.data)
  }

  useEffect(() => {
    getAllVinylData()
    return () => {}
  }, [])

  return (
    <>
      <main className="a-main bg-dark">
        <div className="a-product container">
          <div className="row col-12">
            {/* <div className="a-menuLeft col-12 col-md-2"> */}
            <div className="a-menuLeft col-3">
              <p className="a-menuLeftLabel h4">搜尋商品</p>
              {/* 左側Form表單元件 */}
              <LeftSideForm />
              {/* 左側Top5元件 */}
              <Top5List />
            </div>
            {/* <div className="a-centerList col-12 col-md-10"> */}
            <div className="a-centerList col-9">
              {/* 中間麵包屑元件 */}
              <CenterNav />
              {/* 排序按鈕*/}
              <Arrangement />

              <div className="a-productListFs">
                <div className="row row-cols-sm-2 row-cols-lg-4 ms-10">
                  {/*商品列表卡片 */}
                  <CenterListCard2 vinyls={allvinyldata.vinyls} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default VrList
