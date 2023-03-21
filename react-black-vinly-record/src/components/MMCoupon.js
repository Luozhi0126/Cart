import { FaDollarSign } from 'react-icons/fa'
import dayjs from 'dayjs'
function MMCoupon({ coupon }) {
  return (
    <div className="container">
      <div className="row">
        <div className="memberinfolist d-flex h3">
          <li className="list-unstyled  me-5">全部</li>
          <li className="list-unstyled  me-5">可使用</li>
          <li className="list-unstyled  me-5">已失效</li>
          <li className="list-unstyled  me-5">未領取</li>
        </div>
        <div className="mainh">
          <table className="table  orderList align-middle">
            <thead>
              <tr>
                <th className="col ">優惠</th>
                <th className="col ">內容</th>
                <th className="col ">狀態</th>
              </tr>
            </thead>
            <tbody>
              {coupon.map((r) => {
                return (
                  <tr key={r.sid}>
                    <td className="ordernamber coupon ">
                      NT{r.discount_amount}
                    </td>
                    <td className="orderdetail justify-content-lg-evenly d-lg-flex ">
                      <div className=" d-none d-lg-block">
                        <div className="couponclear">{r.coupon_name_SID}</div>
                        {/* <div>
                                            滿<FaDollarSign />
                                            3000可使用
                                        </div> */}
                        <div>
                          有效期限
                          {dayjs(r.receive_date_SID).format('YYYY-MM-DD')}
                        </div>
                      </div>
                      <div>
                        <div className="couponclear">Member95</div>
                        <div>優惠代碼</div>
                      </div>
                    </td>
                    <td>立即使用</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MMCoupon
