import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import './Item.css'

export default function Item() {
  const [data, setData] = useState('')
  const { itemId } = useParams()

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/item/${itemId}`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [itemId])
  console.log(itemId)
  console.log(data)

  const pic = data.sprites.default
  const desc = data.flavor_text_entries[0].text

  return (
    <div className="item grid-container">
      <div className="item-title">
        <h1>{data.name}</h1>
        <img src={pic} alt={`${data.name} pic`} />
      </div>
      <div className="item-data-wrapper">
        <h2>Description:</h2>
        <p>{desc}</p>
        <p>Cost: {data.cost}</p>
      </div>
    </div>
  )
}
