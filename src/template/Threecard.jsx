import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Avatar,
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
    main: {
      backgroundColor: "#F8F3EC",
      width: "100%",
      height: "960px",
      [theme.breakpoints.down("lg", "md", "sm")]: {
        height: "100%",
        padding :"20px"
      },
    },
    mainhead: {
      textAlign: "center",
      padding: "100px",
    },
    head_text: {
      marginTop: "10px",
    },
    threecard: {
      display: "flex",
      [theme.breakpoints.up("lg")]: {
        display :"flex",
        justifyContent:"center"
      },
    },
    first_card: {
      height: "350px",
      padding: "20px",
      [theme.breakpoints.down("md")]: {},
    },
    first_card_content: {
      [theme.breakpoints.down("lg", "md", "sm")]: {
        justifyContent:"center",
        textAlign: "center"
      },
    },
    second_card: {
      padding: "20px",
      height: "350px",
      [theme.breakpoints.down("md","sm")]: {
        padding: "5px",
      },
    },
    third_card: {
      height: "350px",
      padding: "20px",
      [theme.breakpoints.down("lg")]: {
        
      },
    },
  };
});

 const Threecard = () => {
  const {
    main,
    mainhead,
    head_text,
    threecard,
    first_card,
    second_card,
    third_card,
    first_card_content,
  } = useStyles();

  return (
    <>
      <Grid className={main}>
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

        <Grid container spacing={3} className={threecard}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card sx={{ backgroundColor: "#EAE4DC" }} className={first_card}>
              <Grid sx={{ padding: "20px" }} className={first_card_content}>
                <Avatar src="../../assets/cardimg11.png" />
              </Grid>
              <CardContent className={first_card_content}>
                <Typography variant="h3">Social</Typography>
                <Typography variant="h3">advertising</Typography>

                <Typography color="text.secondary" sx={{ marginTop: "15px" }}>
                  Lorem ipsum dolor sit amet. <br />
                  Lorem ipsum dolor sit amet  <br />
                  Lorem ipsum dolor si.
                </Typography>
              </CardContent>
              <CardActions className={first_card_content}>
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
          <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card sx={{ backgroundColor: "#EAE4DC" }} className={third_card}>
              <Grid sx={{ padding: "20px" }}>
                <Avatar src="../../assets/cardimg3.png" />
              </Grid>
              <CardContent className={first_card_content}>
                <Typography variant="h3">Partnership</Typography>
                <Typography variant="h3">Manager</Typography>
                <Box>
                <Typography color="text.secondary" sx={{ marginTop: "15px" }}>
                  Lorem ipsum dolor sit amet. <br />
                  Lorem ipsum dolor sit amet  <br />
                  Lorem ipsum dolor si.
                </Typography>
                </Box>
              </CardContent>
              <CardActions className={first_card_content}>
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
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card sx={{ backgroundColor: "#EAE4DC" }} className={third_card}>
              <Grid sx={{ padding: "20px" }}>
                <Avatar src="../../assets/cardimg3.png" />
              </Grid>
              <CardContent className={first_card_content}>
                <Typography variant="h3">Content</Typography>
                <Typography variant="h3">Creations</Typography>
                <Box>
                <Typography color="text.secondary" sx={{ marginTop: "15px" }}>
                  Lorem ipsum dolor sit amet. <br />
                  Lorem ipsum dolor sit amet  <br />
                  Lorem ipsum dolor si.
                </Typography>
                </Box>
              </CardContent>
              <CardActions className={first_card_content}>
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
        </Grid>
      </Grid>
    </>
  );
};

export default Threecard;
