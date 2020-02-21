import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>NOTES!</h1>
        <p>A Simple App To Save and Edit Notes</p>
        <Link to="/notes/new" className="waves-effect waves-light btn">
          CREATE A NOTE
        </Link>
      </div>
    </>
  )
}

export default Landing
