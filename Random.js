import {Component} from 'react'
import React, { useState} from 'react';
import {AppBar, Toolbar, Typography, Link, Card, CardContent, Button} from '@mui/material';
export default function Random() {
     
      const [randomnum, setnum] = useState(4);
      const getNumber = () => {
        setnum(Math.ceil((Math.random()*4)))
      };

  return (
    <Card className='card'>
      <CardContent className='cardcontent'>
        <Typography className='text' variant='h4'> 
          Generate your lucky number!!
        </Typography>

        <Typography variant='h2'>
          {randomnum}
        </Typography>

        <Button size='large' variant='outlined' color='success' onClick={getNumber} style={{
          borderRadius: "20px"
        }} > Generate
        </Button>
      </CardContent>
    </Card>
  )
}
