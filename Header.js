import React from 'react'
import logo from './gfg.jpeg'
import {AppBar, Toolbar, Typography, Link} from '@mui/material';

export default function Header() {
  return (
   <>
   <AppBar position="relative" color='transparent' gutterBottom>
    <Toolbar className='nav'>
      <Typography variant='title'>
        <Link href="https://gfgrcoem.netlify.app/">
          <img src={logo} alt='GFG logo' height={100}/>
        </Link>
      </Typography>
    </Toolbar> 
   </AppBar>
   </>
  )
}
