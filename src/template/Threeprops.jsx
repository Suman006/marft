import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Grid,
  Typography,
  Box,
  CardActions,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      backgroundColor: "#F8F3EC",
      width: "100%",
      height: "873px",
    },
    mainhead: {
      textAlign: "center",
      padding: "100px",
    },
    head_text: {
      marginTop: "10px",
    },
    maincard: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
    },
    threecard:{
        width:"300px",
        height:"350px",

        [theme.breakpoints.down("md")] :{
           
        }
    }
  };
});

const Threeprops = () => {
  const { container, mainhead, head_text, maincard, threecard } = useStyles();
  return (
    <>
      <Box className={container}>
        <Box className={mainhead}>
          <Typography variant="h3" sx={{ color: "#181817" }}>
            What we provide
          </Typography>
          <Box className={head_text}>
            <Typography color="text.secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem qui mollitia ipsa.
            </Typography>
            <Typography color="text.secondary">
              Non nisi tincidunt ut elementum turpis
            </Typography>
          </Box>
        </Box>


        <Grid className={maincard}>
          <Grid>
            <Card sx={{backgroundColor:"#EAE4DC",}}className={threecard}>
              <CardContent>
                <Typography variant="h3">Social</Typography>
                <Typography variant="h3">advertising</Typography>
                <Box>
                  <Typography color="text.secondary" sx={{ marginTop: "15px" }}>
                    Lorem ipsum dolor sit amet.
                  </Typography>
                  <Typography color="text.secondary">
                    Lorem ipsum dolor sit amet in.
                  </Typography>
                  <Typography color="text.secondary">
                    Lorem ipsum dolor si.
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  sx={{ fontWeight: "bold" }}
                  size="small"
                  variant="string"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid>
          <Card sx={{ backgroundColor:"#EAE4DC" }} className={threecard}>
    {/* <Grid className={image_perfect}>
            <Avatar src='../../assets/cardimg2.png'/>
        </Grid> */}
      <CardContent >
        <Typography variant='h3'  >
         Partnership
        </Typography>
        <Typography variant="h3"  >
            Management
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
          </Grid>
          <Grid>
          <Card sx={{  backgroundColor:"#EAE4DC" }} className={threecard}>
    {/* <Grid className={image_perfect} >
            <Avatar src='../../assets/cardimg3.png'/>
        </Grid> */}
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
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Threeprops;
