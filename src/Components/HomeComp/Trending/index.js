import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./style.scss"

function Trending() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:2023/products`).then((response) => {
      setData(response.data)
    })
  })
  return (

    <>
      <div>
        <div className="Trending">
          <p>Popular Item in the market</p>
          <h3>Trending Product</h3>
        </div>
        <div className="cardTrend">
          {data.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img class="cardimgtop" src={element.imgUrl} alt="img" />
                <div class="card-body">
                  <p>{element.categories}</p>
                  <h4>{element.title}</h4>
                  <p>{element.price}</p>
                  <a href="#" class="btn btn-primary">Delete</a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}



export default Trending