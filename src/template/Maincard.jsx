import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Box, Button } from "@mui/material";
import ImageBig from "./Image/imgbig.png";
import ImageSmall from "./Image/imgsmall.png";
import ImgCircle from "./Image/imgcircle.png";
import MenImg from "./Image/rohitmaterial2.png";
import CircleOne from "./Image/circle .png";
import CircleTwo from "./Image/circle two.png";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      backgroundColor: "#181817",
      width: "100%",
      height: "100%",
      color: "#ffffff",
    },
    main: {
      display: "flex",
      justifyContent: "space-between",
      padding: 70,

      [theme.breakpoints.down("md")]: {
        textAlign: "center",
      },
      [theme.breakpoints.down("sm", "xs")]: {
        display: "inline",
        textAlign: "center",
      },
    },
    Img_main: {
      position: "relative",
    },
    img_big: {
      position: "absolute",
      top: "30%",
      left: "60%",

      [theme.breakpoints.down("sm")]: {
        top: "40%",
        left: "48%",
        width: 200,
      },
      big_img: {
        width: "400px",

        [theme.breakpoints.down("sm")]: {
          width: "200px",
        },
      },
    },
    circle_text: {
      display: "flex",
      marginTop: "20px",
    },
    men_laptop_img: {
      backgroundImage: `url(${MenImg})`,
      backgroundRepeat: "no-repea",
      backgroundSize: "cover",
      width: "100%",
      height: 600,
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    men_Circle_one: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    // text_head:{
    //     textAlign:"center",
    // }
  };
});

export default function FullWidthGrid() {
  const {
    container,
    main,
    Img_main,
    img_big,
    circle_text,
    text_head,
    big_img,
    men_laptop_img,
    men_Circle_one,
  } = useStyles();

  return (
    <Box className={container}>
      <Box className={main}>
        <Box className={Img_main}>
          <img src={ImageBig} alt="" className={big_img} />
          <img src={ImageSmall} className={img_big} alt="" width={305} />
        </Box>
        <Box>
          <Box sx={{ marginBottom: "30px" }}>
            <Typography variant="h3">Take your social</Typography>
            <Typography variant="h3">media marketing to</Typography>
            <Typography variant="h3">the next level </Typography>
          </Box>
          <Box>
            <Box className={circle_text}>
              <img src={ImgCircle} alt="" />
              <Typography sx={{ marginLeft: "20px" }}>
                Leo erat magna feugiat non enim
              </Typography>
            </Box>
            <Box className={circle_text}>
              <img src={ImgCircle} alt="" />
              <Typography sx={{ marginLeft: "20px" }}>
                Leo erat magna feugiat
              </Typography>
            </Box>
            <Box className={circle_text}>
              <img src={ImgCircle} alt="" />
              <Typography sx={{ marginLeft: "20px" }}>
                Leo erat magna non enim
              </Typography>
            </Box>
          </Box>
          <Box className={text_head}>
            <Typography sx={{ my: "50px" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br></br>
              Aspernatur, Lorem ipsum, dolor sit amet ipsum,<br></br>{" "}
              consectetur adipisicing elit. Aspernatur adipisicing .
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{ bgcolor: "white", color: "black", borderRadius: "15px" }}
            >
              <Typography sx={{ padding: "15px", fontSize: "22px" }}>
                About Us
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>

      <Box className={men_laptop_img}>
        <Box>
          <Box className={men_Circle_one}>
            <img src={CircleOne} alt="one" />
            <Box sx={{ marginLeft: "-85PX", marginTop: "10px" }}>
              <img src={CircleTwo} alt="two" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
