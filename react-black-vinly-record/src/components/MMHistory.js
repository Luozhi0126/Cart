import React from 'react'
import { FaDollarSign } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

function MMHistory({ orderlist }) {
  return (
    <div className="container">
      <div className="row">
        <div className="memberinfolist text-nowrap h3 d-flex">
          <li className="list-unstyled me-5">全部</li>
          <li className="list-unstyled me-5">配送中</li>
          <li className="list-unstyled me-5">已完成/取消</li>
        </div>
        <div className="mainh">
          <table className="table orderList justify-content:start; align-middle">
            <thead>
              <tr>
                <th className="col">訂單編號</th>
                <th className="col">內容</th>
                <th className="col">狀態</th>
              </tr>
            </thead>
            <tbody>
              {orderlist.map((r) => {
                return (
                  <tr>
                    <td className="ordernamber">
                      <div>
                        <Link to="/MCheckOrderList">#{r.order_number}</Link>
                      </div>
                    </td>
                    <td className="orderdetail justify-content-lg-evenly d-lg-flex ">
                      <div className="d-none d-lg-block">
                        {dayjs(r.order_time).format('YYYY-MM-DD')}(共
                        {r.quantity}件商品)
                      </div>
                      <img
                        className="orderimg d-none d-lg-block"
                        alt="product"
                        src="/img/mimg/epikhigh_shoebox.jpg"
                      />

                      <div>
                        <FaDollarSign />
                        {r.total_price}
                      </div>
                      <button
                        className="btn-success"
                        type="button"
                        // data-bs-toggle="collapse"
                        // data-bs-target="#collapseExample"
                        // aria-expanded="false"
                        // aria-controls="collapseExample"
                      >
                        <Link to="/MCheckOrderList">查看</Link>
                      </button>
                    </td>
                    <td>{r.order_status}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          {/* <div className="collapse" id="collapseExample">
            <div className="card card-body">
              <MCheckOrderList />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default MMHistory
