import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import './Item.css'

export default function Item() {
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const { itemId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/item/${itemId}`
        )
        if (response.status === 200) {
          setItem(response.data)
          setLoading(false)
        }
      } catch (err) {
        setLoading(true)
        setError(err)
      }
    }
    fetchData()
  }, [itemId])
  console.log(itemId)
  console.log(item)

  const pic = item.sprites === undefined ? 'not found' : item.sprites.default
  const desc =
    item.flavor_text_entries === undefined
      ? 'not found'
      : item.flavor_text_entries[0].text
  const effect =
    item.effect_entries === undefined
      ? 'not found'
      : item.effect_entries[0].effect

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <p>There was an error loading your data!</p>
  }

  return (
    <div className="item grid-container">
      <div className="item-title">
        <h1>
          {item.name === undefined ? 'not found' : item.name.replace('-', ' ')}
        </h1>
        <img src={pic} alt={`${item.name} pic`} />
      </div>
      <div className="item-data-wrapper">
        <h2>Description:</h2>
        <p>{desc}</p>
        <h2>Effect:</h2>
        <p>{effect}</p>
        <p>
          <strong>Cost: </strong>¥{item.cost}
        </p>
      </div>
    </div>
  )
}