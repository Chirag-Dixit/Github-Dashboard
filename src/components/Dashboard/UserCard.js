import { Stack, Typography } from '@mui/material'
import React from 'react'
import User from '../../images/user.jpg'
import { connect } from 'react-redux'

const UserCard = (props) => {
  const { name } = props

  return (
    <Stack height='200px' spacing={4} padding={4} border='2px solid black'>
      {/* <img src={<User />} alt='profile picture here'/> */}
      <Typography variant='h5' color='primary'>{name}</Typography>
      <Stack direction='row'>
        <Typography>Followers Count</Typography>
        <Typography>Following Count</Typography>
      </Stack>
    </Stack>
  )
}

const mapStateToProps = state => {
  return{
    name: state.name.userName,
  }
}

export default connect(mapStateToProps, null)(UserCard)


//frontend: React, Redux, Material UI, 