import React from 'react'
// import axios from 'axios'
import { useParams } from 'react-router'
// import { SpinnerCircular } from 'spinners-react'
import { useSelector } from 'react-redux'
import { selectItemById } from '../store/items/itemsSlice'
import { Link } from 'react-router-dom'

export default function Item() {
  const { itemId } = useParams()

  const item = useSelector((state) => selectItemById(state, itemId))
  // console.log(item)

  if (!item) {
    return (
      <section className="not-found">
        <h2>There was an error loading your data!</h2>
        <div className="menu-box">
          <Link to="/items" className="link app-link">
            Go back to Item Dex
          </Link>
        </div>
      </section>
    )
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://pokeapi.co/api/v2/item/${itemId}`
  //       )
  //       if (response.status === 200) {
  //         setItem(response.data)
  //         setLoading(false)
  //       }
  //     } catch (err) {
  //       setLoading(true)
  //       setError(err)
  //     }
  //   }
  //   fetchData()
  // }, [itemId])

  const pic = item.sprites === undefined ? 'Loading...' : item.sprites.default
  const desc =
    item.flavor_text_entries === undefined
      ? 'Loading...'
      : item.flavor_text_entries[0].text
  const effect =
    item.effect_entries === undefined
      ? 'Loading...'
      : item.effect_entries[0].effect

  // if (loading) {
  //   return (
  //     <div className="loading">
  //       <SpinnerCircular color="#2769be" />
  //     </div>
  //   )
  // }

  return (
    <div className="item grid-container">
      <div className="item-title">
        <h1>
          {item.name === undefined ? 'Loading...' : item.name.replace('-', ' ')}
        </h1>
        <img
          src={pic}
          alt={`${item.name === undefined ? 'Loading' : item.name} pic`}
        />
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
