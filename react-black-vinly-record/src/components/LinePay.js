import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../store'
function LinePay() {
  const [state, dispatch] = useContext(CartContext)
  return (
    <>
      <div className="CartWarp c-p-side">
        <div className="c-CartLinePaycontainer">
          <div>
            <h3>應付款項: NT$ {state.total + 10 || 0}</h3>
            <button type="button">確定付款</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LinePay
