import React from 'react'
import { Nav, Link } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const Size = '32px'

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'><MdHome size={Size} /></Link>
      <Link to='/favs'><MdFavoriteBorder size={Size} /></Link>
      <Link to='/users'><MdPersonOutline size={Size} /></Link>
    </Nav>
  )
}
