import { Stack } from '@mui/material'
import React from 'react'
import Left from './lobby/Left'
import Right from './lobby/Right'

const Lobby = () => {
  //useState search value
  //function will be called on button click
  //parameter = search final value
  // api.github.com/{value}
  return (
    <Stack direction='row' spacing={2} padding={1}>
        {/* left side mai column hoga containing searchBar and recent searches from the logged in user */}
        {/* right side mai search result honge */}
        {/* clicking on the results, will lead to another page jaha par sari details hongi, in dashboard form */}
        <Left />
        <Right />
    </Stack>
  )
}

export default Lobby
