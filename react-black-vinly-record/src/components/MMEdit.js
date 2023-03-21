import dayjs from 'dayjs'
import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function MMEdit({ member }) {
  return (
    <div className="container text-nowrap ">
      <div className="row">
        <div className="Link d-flex h3">
          <li className="list-unstyled  me-5">
            <Link to="/MEdit" className="mlisthover">
              編輯資料
            </Link>
          </li>
          <li className="list-unstyled  me-1">
            <Link to="/MPassword" className="mlisthover">
              設定密碼
            </Link>
          </li>
        </div>

        <form className="d-lg-flex minfo-editgroup justify-content-evenly">
          {member.map((r) => {
            return (
              <>
                <div className="px-4 mmyCard" key={r.sid}>
                  <div className="mimg-warp ">
                    <img src="/img/mimg/vinyl131301.jpg" alt="" />
                  </div>
                  <div className=" justify-sm-start ">
                    <h3>{r.name}</h3>
                    <span className="h6 memberlevel px-xl-2">會員等級</span>
                  </div>
                </div>
              </>
            )
          })}

          <div>
            <div className="h6">
              <FaEdit />
              編輯會員資料
            </div>
            {member.map((r) => {
              return (
                <>
                  <div className="mb-3 d-lg-flex" key={r.sid}>
                    <label htmlFor="name" className="form-label me-3">
                      姓名
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="name"
                      value={r.name}
                    />
                  </div>
                  <div className="mb-3 d-lg-flex">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label me-3"
                    >
                      信箱
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={r.email}
                    />
                  </div>
                  <div className="mb-3 d-lg-flex">
                    <label htmlFor="tel" className="form-label me-3">
                      手機
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="tel"
                      value={r.mobile}
                    />
                  </div>
                  <div className="mb-3 d-lg-flex">
                    <label htmlFor="tel" className="form-label me-3">
                      地址
                    </label>
                    <input type="tel" className="form-control" id="tel" />
                    {r.city}
                    {r.area}
                    {r.address}
                  </div>
                  <div className="mb-3 d-lg-flex">
                    <label htmlFor="tel" className="form-label me-3">
                      性別
                    </label>
                    <select id="gender" name="gender" value={r.gender}>
                      <option value="男">男</option>
                      <option value="女">女</option>
                      <option value="other" selected>
                        不透露
                      </option>
                    </select>
                  </div>
                  <div className="mb-3 d-lg-flex">
                    <label htmlFor="day" className="form-label me-3">
                      生日
                    </label>
                    <input
                      type="day"
                      className="form-control"
                      id="day"
                      value={dayjs(r.birthday).format('YYYY-MM-DD')}
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <label
                      className="form-check-label me-3"
                      htmlFor="exampleCheck1"
                    >
                      訂閱通知
                    </label>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                  </div>
                </>
              )
            })}

            <button type="submit" className="btn-success me-3">
              送出
            </button>
            <button type="" className="btn-comment mb-3">
              取消
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MMEdit
