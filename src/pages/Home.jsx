import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>Home Page</h1>
    <p>
        Go to<Link to='./products'>Product Page</Link>
    </p>
    </>
  )
}

export default Home