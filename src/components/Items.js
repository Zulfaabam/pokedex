import React, { useState, useEffect } from 'react'
import './Items.css'
import { NavLink } from 'react-router-dom'
import { SpinnerCircular } from 'spinners-react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllItems, fetchItems } from '../store/items/itemsSlice'

export default function Items() {
  // const { history } = props
  const [filter, setFilter] = useState('')

  const dispatch = useDispatch()
  const items = useSelector(selectAllItems)
  const itemStatus = useSelector((state) => state.items.status)
  const error = useSelector((state) => state.items.error)

  useEffect(() => {
    if (itemStatus === 'idle') {
      dispatch(fetchItems(10))
    }
  }, [dispatch, itemStatus])
  // console.log(items)

  const handleSearchChange = (e) => {
    setFilter(e.target.value)
  }

  let itemdex
  if (itemStatus === 'loading') {
    itemdex = (
      <div className="loading">
        <SpinnerCircular color="#2769be" />
      </div>
    )
  } else if (itemStatus === 'succeeded') {
    itemdex = items.map(
      (item) =>
        item.name.includes(filter.replace(' ', '-')) && (
          <div key={item.id} className="items-box">
            <NavLink
              to={`/items/${item.id}`}
              // onClick={() => history.push(`/items/${item.id}`)}
            >
              <img src={item.sprites.default} alt={item.name} />
            </NavLink>
            <NavLink
              to={`/items/${item.id}`}
              className="link items-name"
              // onClick={() => history.push(`/items/${item.id}`)}
            >
              {item.name.replace('-', ' ')}
            </NavLink>
          </div>
        )
    )
  } else if (itemStatus === 'failed') {
    itemdex = <div>{error}</div>
  }

  return (
    <div className="items grid-container" id="items">
      <header>
        <h1>Item Dex</h1>
        <input
          type="text"
          name="filter"
          placeholder="Filter Item"
          onChange={handleSearchChange}
        />
      </header>
      <div className="items-container">{itemdex}</div>
    </div>
  )
}
