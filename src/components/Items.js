import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Items.css'
import { NavLink } from 'react-router-dom'
import { SpinnerCircular } from 'spinners-react'

export default function Items(props) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState('')
  const { history } = props

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://pokeapi.co/api/v2/item/`, {
        params: { limit: 100 },
      })
      .then((res) => {
        return res.data.results
      })
      .then((results) => {
        return Promise.all(results.map((res) => axios.get(res.url)))
      })
      .then((results) => {
        setLoading(false)
        setData(results.map((res) => res.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  console.log(data)

  const handleSearchChange = (e) => {
    setFilter(e.target.value)
  }

  if (loading) {
    return (
      <div className="loading">
        <SpinnerCircular color="#2769be" />
      </div>
    )
  }

  return (
    <div className="items grid-container" id="items">
      <header>
        <h1>Items Dex</h1>
        <input
          type="text"
          name="filter"
          placeholder="Filter Item"
          onChange={handleSearchChange}
        />
      </header>
      <div className="items-container">
        {data.map(
          (item) =>
            item.name.includes(filter.replace(' ', '-')) && (
              <div key={item.id} className="items-box">
                <NavLink
                  to={`/items/${item.id}`}
                  onClick={() => history.push(`/items/${item.id}`)}
                >
                  <img src={item.sprites.default} alt={item.name} />
                </NavLink>
                <NavLink
                  to={`/items/${item.id}`}
                  className="link items-name"
                  onClick={() => history.push(`/items/${item.id}`)}
                >
                  {item.name.replace('-', ' ')}
                </NavLink>
              </div>
            )
        )}
      </div>
    </div>
  )
}
