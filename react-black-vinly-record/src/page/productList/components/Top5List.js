import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Top5List() {
  return (
    <>
      <div className="a-top5List mt-8 d-none d-lg-block">
        <p className="a-top5Label h3 text-center">Top 5</p>

        {/* 排名一 */}
        <div className="a-top5Card row g-3 bg-blu">
          <p className="a-top5Label col-2 h2">1</p>
          <div className="a-top5Img col-4">
            <img src="./img/52.jpg" alt="" className="img-fluid" />
            <BsStarFill size={10} color={'#ffc107'} />
            <BsStarFill size={10} color={'#ffc107'} />
            <BsStarFill size={10} color={'#ffc107'} />
            <BsStarFill size={10} color={'#ffc107'} />
            <BsStarFill size={10} color={'#ffc107'} />
          </div>
          <div className="a-top5Info col list-unstyled">
            <Link to="/ProductDt" className="a-top5albumName text-14">
              日本宮崎駿日本動畫電影純輕天空之城【音樂年華】
              <p className="a-albumPrice text-end">$1990</p>
            </Link>
          </div>
        </div>
        {/* 排名二*/}
        <div className="a-top5Card row g-3 bg-blu">
          <p className="a-top5Label col-2 h2">2</p>
          <div className="a-top5Img col-4">
            <img src="./img/52.jpg" alt="" className="img-fluid" />
            <BsStarFill size={10} color={'#ffc107'} />
            <BsStarFill size={10} color={'#ffc107'} />
            <BsStarFill size={10} color={'#ffc107'} />
            <BsStarFill size={10} color={'#ffc107'} />
            <BsStarFill size={10} color={'#ffc107'} />
          </div>
          <div className="a-top5Info col list-unstyled">
            <Link to="/ProductDt" className="a-top5albumName text-14">
              日本宮崎駿日本動畫電影純輕天空之城【音樂年華】
              <p className="a-albumPrice text-end">$1990</p>
            </Link>
          </div>
        </div>
        {/* 排名三 */}
        <div className="a-top5Card row g-3 bg-blu">
          <p className="a-top5Label col-2 h2">3</p>
          <div className="a-top5Img col-4">
            <img src="./img/52.jpg" alt="" className="img-fluid" />
            <BsStarFill size={10} color={'#ffc107'} />
            <BsStarFill size={10} color={'#ffc107'} />
            <BsStarFill size={10} color={'#ffc107'} />
            <BsStarFill size={10} color={'#ffc107'} />
            <BsStarFill size={10} color={'#ffc107'} />
          </div>
          <div className="a-top5Info col list-unstyled">
            <Link to="/ProductDt" className="a-top5albumName text-14">
              日本宮崎駿日本動畫電影純輕天空之城【音樂年華】
              <p className="a-albumPrice text-end">$1990</p>
            </Link>
          </div>
        </div>
        {/* 排名四 */}
        <div className="a-top5Card row g-3 bg-blu">
          <p className="a-top5Label col-2 h2">4</p>
          <div className="a-top5Img col-4">
            <img src="./img/52.jpg" alt="" className="img-fluid" />
            <BsStarFill size={10} color={'#ffc107'} />
            <BsStarFill size={10} color={'#ffc107'} />
            <BsStarFill size={10} color={'#ffc107'} />
            <BsStarFill size={10} color={'#ffc107'} />
            <BsStarFill size={10} color={'#ffc107'} />
          </div>
          <div className="a-top5Info col list-unstyled">
            <Link to="/ProductDt" className="a-top5albumName text-14">
              日本宮崎駿日本動畫電影純輕天空之城【音樂年華】
              <p className="a-albumPrice text-end">$1990</p>
            </Link>
          </div>
        </div>
        {/* 排名五 */}
        <div className="a-top5Card row g-3 bg-blu">
          <p className="a-top5Label col-2 h2">5</p>
          <div className="a-top5Img col-4">
            <img src="./img/52.jpg" alt="" className="img-fluid" />
            <BsStarFill size={10} color={'#ffc107'} />
            <BsStarFill size={10} color={'#ffc107'} />
            <BsStarFill size={10} color={'#ffc107'} />
            <BsStarFill size={10} color={'#ffc107'} />
            <BsStarFill size={10} color={'#ffc107'} />
          </div>
          <div className="a-top5Info col list-unstyled">
            <Link to="/ProductDt" className="a-top5albumName text-14">
              日本宮崎駿日本動畫電影純輕天空之城【音樂年華】
              <p className="a-albumPrice text-end">$1990</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Top5List
