import React from 'react';
import {makeStyles} from '@mui/styles';
import { Avatar, Grid, Typography, Box,CardActions,Card, CardContent,Button } from '@mui/material';

const userStyles = makeStyles((theme)=>{
    return {
        container : {
            backgroundColor :"#F8F3EC",
            width : "100%",
            height : "873px"
        },
        mainhead:{
            textAlign : "center",
            padding : "100px"
        },
        threecard : {
            display : 'flex',
            justifyContent : 'center',
            gap : '20px'
        },
        image_perfect : {
          padding : "20px"
        },
        head_text :{
          marginTop : "10px"
        },
        common_card :{
          width: 300,
          height : 350,
          padding :"20px",
          [theme.breakpoints.down("lg")]:{
            width: 260
          },
          [theme.breakpoints.down("md")]:{
            display :"",
            width: 200
          }
        }
    }
})

 const card = () => {

    const {
        container,
        mainhead,
        threecard,
        image_perfect,
        head_text,
        common_card
    }=userStyles();

  return (
   <>
   <Box className={container}>
    <Box className={mainhead}>
        <Typography variant='h3'  sx={{color :"#181817"}}>
            What we provide
        </Typography>
       <Box className={head_text}>
       <Typography color='text.secondary' >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem qui mollitia ipsa.
        </Typography>
        <Typography color='text.secondary' >
          Non nisi tincidunt ut elementum turpis
        </Typography>
       </Box>
    </Box>
    <Box className={threecard}>
    <Box >
    <Card sx={{  backgroundColor:"#EAE4DC" }} className={common_card}>
        <Grid className={image_perfect}>
            <Avatar src='../../assets/cardimg11.png'/>
        </Grid>
      <CardContent >
        <Typography variant='h3'>
          Social 
        </Typography>
        <Typography variant="h3">
        advertising
        </Typography>
    <Box>
    <Typography color='text.secondary'  sx={{marginTop:"15px"}}>
            Lorem ipsum dolor sit amet.
        </Typography>
        <Typography color='text.secondary'>
            Lorem ipsum dolor sit amet in.
        </Typography>
        <Typography color='text.secondary'>
            Lorem ipsum dolor si.
        </Typography>
    </Box>
      </CardContent>
      <CardActions>
      <Button sx={{fontWeight:"bold"}} size="small"  variant='string'>Learn More</Button>
      </CardActions>
    </Card>
    </Box>
    <Box>
    <Card sx={{ backgroundColor:"#EAE4DC" }} className={common_card}>
    <Grid className={image_perfect}>
            <Avatar src='../../assets/cardimg2.png'/>
        </Grid>
      <CardContent >
        <Typography variant='h3'  >
         Partnership
        </Typography>
        <Typography variant="h3"  >
            Manager
        </Typography>
        <Box>
    <Typography sx={{marginTop:"15px"}} color='text.secondary'>
            Lorem ipsum dolor sit amet.
        </Typography>
        <Typography color='text.secondary'>
            Lorem ipsum dolor sit amet in.
        </Typography>
        <Typography color='text.secondary'>
            Lorem ipsum dolor si.
        </Typography>
    </Box>
      </CardContent>
      <CardActions>
      <Button sx={{fontWeight:"bold"}} size="small" variant='string'>Learn More</Button>
      </CardActions>
    </Card>
    </Box>
    <Box>
    <Card sx={{  backgroundColor:"#EAE4DC" }} className={common_card}>
    <Grid className={image_perfect} >
            <Avatar src='../../assets/cardimg3.png'/>
        </Grid>
      <CardContent startIcon = {<sendIcon/>} >
        <Typography variant='h3' >
          Content
        </Typography>
        <Typography variant="h3" >
          Creations
        </Typography>
        <Box>
    <Typography sx={{marginTop:"15px"}} color='text.secondary'>
            Lorem ipsum dolor sit amet.
        </Typography>
        <Typography color='text.secondary'>
            Lorem ipsum dolor sit amet in.
        </Typography>
        <Typography color='text.secondary'>
            Lorem ipsum dolor si.
        </Typography>
    </Box>
      </CardContent>
      <CardActions>
        <Button sx={{fontWeight:"bold"}} size="small" variant='string'>Learn More</Button>
      </CardActions>
    </Card>
    </Box>
    </Box>
   </Box>
   </>
  )
}

export default card;
