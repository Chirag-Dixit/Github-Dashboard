import { Button, Stack } from '@mui/material'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import User from './User'

const Right = (props) => {
  const {searchUsers} = props
  const [loading, setLoading] = useState(true)

  const users = searchUsers?.items?.map((values, index)=>{
    return <User values={values} key={index}/>
  })

  return (
    <Stack className='right' border='2px solid black'>
        {users}
    </Stack>
  )
}

const mapStateToProps = state => {
  return{
    searchUsers: state.searchUsers.data
  }
}

export default connect(mapStateToProps, null)(Right)
