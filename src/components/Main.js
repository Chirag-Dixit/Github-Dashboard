import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <p style={{
            fontSize: '5em'
        }}>
            This is the homepage<br/>
            <Link to='lobby'>
              <Button variant='contained'>Explore Github Dashboard!</Button>
            </Link>
        </p>
    </div>
  )
}

export default Main
