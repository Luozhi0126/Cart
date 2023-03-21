import React from 'react'
import {  FaTimes } from "react-icons/fa";
import { useContext } from 'react';
import { CartContext } from '../store';
function OtherNavbarProdustDetail() {
    const [state,dispatch] = useContext(CartContext);
  return (
    <>
    <div className="c-NavbarDetailContent">
        <div className="c-NavbarDetailDard">
        <table className="table align-middle">
          <tbody className='c-ProductsTable'>
            {state.cartList.map((item)=>{
             return( <tr key={item.id}>
              {/* <td>
                <button type="button" className="btn" onClick={()=>{
                  dispatch({
                    type:"REMOVE_CART_ITEM",
                    payload:{
                      ...item,
                    }
                  })
                }}><FaTimes size={20} /></button>
              </td> */}
              <td>
                <img
                  src={item.img}
                  alt=""
                  className="table-image"
                />
              </td>
              <td>
                {item.title}
                <br />
                <span className="text-muted">NT$ {item.price}</span>
              </td>
              <td>
                {item.quantity}
              </td>
              <td className="text-end">NT$ {item.price * item.quantity}</td>
            </tr>)
            })}
          </tbody>
        </table>
        </div>
      </div>
    </>
  )
}

export default OtherNavbarProdustDetail