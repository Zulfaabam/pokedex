import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import './Pokemon.css'

export default function Item() {
  const [data, setData] = useState([])
  const { itemId } = useParams()

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/item/${itemId}`)
      .then((res) => {
        // const { data } = res
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [itemId])
  console.log(itemId)
  console.log(data)

  return (
    <div className="item grid-container">
      <h1>{data.name}</h1>
      <div className="item-data-wrapper">
        <p>{data['flavor_text_entries'][0].text}</p>
      </div>
    </div>
  )
}
