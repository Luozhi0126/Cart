import React from "react";
import { FaTrashAlt, FaShoppingBag, FaDollarSign } from "react-icons/fa";

function MMWishList({ wishlist }) {
    return (
        <div className="container">
            <div className="row">
                <div className="memberinfolist d-flex h3">
                    <li className="list-unstyled me-1">一鍵加入</li>
                </div>
                <div className="mainh">
                    <table className="table orderList align-middle">
                        <thead>
                            <tr className="">
                                <th className="col">加入時間</th>
                                <th className="col">商品明細</th>
                                <th className="col">購物車</th>
                                <th className="col">刪除</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishlist.map((r) => {
                                return (
                                    <tr key={r.sid}>
                                        <td className="ordernamber">
                                            <div>
                                                <a href="#/">
                                                    {r.created_time}
                                                </a>
                                            </div>
                                        </td>
                                        <td className="orderdetail justify-content-lg-evenly d-lg-flex ">
                                            <img
                                                className="orderimg "
                                                alt="product"
                                                src="/img/mimg/epikhigh_shoebox.jpg"
                                            />
                                            <div className="productdetail d-none d-lg-block">
                                                {r.pre_name}
                                            </div>
                                            <div className="productdetailprice ">
                                                <FaDollarSign />
                                                {r.pre_price}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="wishicon">
                                                <FaShoppingBag />
                                            </div>
                                        </td>
                                        <td className="wishicon">
                                            <FaTrashAlt />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MMWishList;
