import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CartSection from "../components/CartSection"

const MyCard = () => {
  return (
    <Container className={"mt-10"}>
      <Link to={"/"} className="p-2 text-slate-500">
        Home
      </Link>
      /
      <Link to={"/"} className="text-slate-500 p-2">
        My Cart
      </Link>
      <CartSection/>
    </Container>
  )
}

export default MyCard