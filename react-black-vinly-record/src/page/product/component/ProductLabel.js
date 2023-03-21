import React from 'react'
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md'

function ProductLabel() {
  return (
    <>
      <div className="a-productDt-badge row">
        <div className="col text-center text-18-700">
          <ul className="a-arrowIcon list-unstyled text-warning">
            <MdSkipPrevious size={20} />
            <i className="d-inline h6">相關標籤</i>
            <MdSkipNext size={20} />
            <span className="badge btn-success me-1">最新上市</span>
            <span className="badge btn-success me-1">華語/流行</span>
            <span className="badge btn-success me-1">黑膠唱片</span>
            <span className="badge btn-success me-1">10吋</span>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ProductLabel
