import React from "react";
import styles from "./homePage.module.css";
import { Box, Button, Grid } from "@mui/material";
import Image from "next/image";
import homePageShoes from "../../assets/homePageShoes.svg";
import FashionShoes1 from "../../assets/FashionShoes1.svg";
import FashionShoes2 from "../../assets/FashionShoes2.svg";
import FashionShoes3 from "../../assets/FashionShoes3.svg";
import FashionShoes4 from "../../assets/FashionShoes4.svg";
import FashionShoes5 from "../../assets/FashionShoes5.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenRunningShoes1 from "../../assets/menRunningShoes1.svg";
import MenRunningShoes2 from "../../assets/menRunningShoes2.svg";
import MenRunningShoes3 from "../../assets/menRunningShoes3.svg";
import womenheelsNumber1 from "../../assets/womenheelsNumber1.svg";
import womenheelsNumber2 from "../../assets/womenheelsNumber2.svg";
import womenheelsNumber3 from "../../assets/womenheelsNumber3.svg";
import girlsSportsShoesNumber1 from "../../assets/girlsSportsShoesNumber1.svg";
import girlsSportsShoesNumber2 from "../../assets/girlsSportsShoesNumber2.svg";
import girlsSportsShoesNumber3 from "../../assets/girlsSportsShoesNumber3.svg";
import seasonOff from "../../assets/seasonOff.svg";
const HomePageSection: React.FC = () => {
  const fashionShoesNumber = [
    { image1: FashionShoes1, title: "Fashion" },
    { image1: FashionShoes2, title: "" },
    { image1: FashionShoes3, title: "Boots" },
    { image1: FashionShoes4, title: "Party Wear" },
    { image1: FashionShoes5, title: "Heels" },
  ];

  const menRunningShoesNumber = [
    {
      image: MenRunningShoes1,
      heading: "Men's Running Shoes",
      title: "₹6,999",
    },
    { image: MenRunningShoes2, heading: "Men's Sneakers", title: "₹8,999" },
    {
      image: MenRunningShoes3,
      heading: "Men's Sports Shoes",
      title: "₹10,999",
    },
  ];

  const womenheelsNumber = [
    { image: womenheelsNumber1, heading: "", title: "" },
    {
      image: womenheelsNumber2,
      heading: "Women Colourblocked Chunky Sneakers",
      title: "₹7,999",
    },
    {
      image: womenheelsNumber3,
      heading: "Women Stone Work Heels ",
      title: "₹12,999",
    },
  ];
  const girlsSportsShoesNumber = [
    {
      image: girlsSportsShoesNumber1,
      heading: "Girls Holographic Sports Shoes",
      title: "₹5,999",
    },
    {
      image: girlsSportsShoesNumber2,
      heading: "Unisex Colourblock Lace-Up Casual Shoes",
      title: "₹6,999",
    },
    {
      image: girlsSportsShoesNumber3,
      heading: "Unisex white Colour Casual Shoes",
      title: "₹3,999",
    },
  ];

  return (
    <Grid>
      <Grid className={`${styles.homePageColour}`}>
        <Grid container justifyContent="space-between">
          <Grid item md={5} style={{ padding: "1% 5%" }}>
            <p className={`${styles.heading} font80`}>
              Step into Style, Stride with Confidence
              <br />
            </p>
            <Button variant="contained" className={`${styles.shopNowButton}`}>
              SHOP NOW
            </Button>
          </Grid>

          <Grid item md={7} className={`${styles.homePageShoesImageContent}`}>
            <Image
              className={`${styles.homePageShoes}`}
              src={homePageShoes}
              alt=""
              style={{ width: "80%" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        mt={2}
        style={{ marginTop: "35px" }}
        className={`${styles.couponImage}`}
      >
        <p></p>
      </Grid>

      <Grid mt={5} item>
        <p className={`${styles.fashionShoesHeading}`}>TRENDING CATEGORIES</p>
        <Grid
          mt={5}
          style={{ marginTop: "75px" }}
          container
          alignItems="center"
          justifyContent="center"
        >
          {fashionShoesNumber.map((item, index) => (
            <Grid item key={index} className={`${styles.fashionShoesContent}`}>
              <Image src={item.image1} alt={item.title} />
              <p className={`${styles.fashionShoesTitle}`}>{item.title}</p>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid style={{ marginTop: "35px", marginRight: "90px" }}>
        <Grid
          container
          direction="row"
          sx={{
            justifyContent: "flex-end",
            alignItems: "flex-start",
            backgroundColor: "#fff",
          }}
        >
          <Button
            endIcon={<ArrowForwardIosIcon />}
            variant="text"
            sx={{
              color: "#2D2D37",
              fontFamily: "Raleway",
              lineHeight: "36px",
              fontWeight: "500",
              textAlign: "left",
              textTransform: "none",
              textUnderlinePosition: "rom-font",
              textDecorationSkipInk: "none",
              fontSize: "24px",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#000",
              },
            }}
          >
            More
          </Button>
        </Grid>
      </Grid>

      <Grid mt={5} item>
        <Grid mt={5} container alignItems="center" justifyContent="center">
          {menRunningShoesNumber.map((item, index) => (
            <Grid
              item
              key={index}
              className={`${styles.menRunningShoesContent}`}
            >
              <Image src={item.image} alt={item.title} />
              <p className={`${styles.MenRunningShoesHeading}`}>
                {item.heading}
              </p>
              <p className={`${styles.MenRunningShoesTitle}`}>{item.title}</p>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid className={`${styles.walkImages}`}>
        <p style={{ padding: "50% 0%" }}></p>
      </Grid>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="4% 13%"
      >
        {/* Left content (empty or customizable) */}
        <Box>
          {" "}
          <p className={`${styles.womenHeading}`}>Women</p>
        </Box>

        {/* Right aligned "More" */}
        <Button
          endIcon={<ArrowForwardIosIcon />}
          variant="text"
          sx={{
            color: "#2D2D37",
            fontFamily: "Raleway",
            lineHeight: "36px",
            fontWeight: "500",
            textAlign: "left",
            textTransform: "none",
            textUnderlinePosition: "rom-font",
            textDecorationSkipInk: "none",
            fontSize: "24px",
            "&:hover": {
              backgroundColor: "transparent",
              color: "#000",
            },
          }}
        >
          More
        </Button>
      </Box>

      <Grid mt={5} item>
        <Grid
          mt={5}
          style={{ marginTop: "75px" }}
          container
          alignItems="center"
          justifyContent="center"
        >
          {womenheelsNumber.map((item, index) => (
            <Grid
              item
              key={index}
              className={`${styles.menRunningShoesContent}`}
            >
              <Image src={item.image} alt={item.title} />
              <p className={`${styles.MenRunningShoesHeading}`}>
                {item.heading}
              </p>
              <p className={`${styles.MenRunningShoesTitle}`}>{item.title}</p>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          padding: "5% 5%",
        }}
      >
        <Grid item md={6}>
          <Image
            className={`${styles.seasonOff}`}
            src={seasonOff}
            alt=""
            style={{ width: "80%" }}
          />
        </Grid>
        <Grid item md={6} style={{ padding: "0% 13%" }}>
          <p className={`${styles.headingSeason} font80`}>
            Season Off for <span style={{ color: "#EC6F02" }}>Kids 30%</span>
            Running Shoes
            <br />
          </p>
          <Button
            variant="contained"
            className={`${styles.shopNowButtonBlack}`}
          >
            SHOP NOW
          </Button>
        </Grid>
      </Grid>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="0% 13%"
      >
        {/* Left content (empty or customizable) */}
        <Box>
          {" "}
          <p className={`${styles.womenHeading}`}>Kids</p>
        </Box>

        {/* Right aligned "More" */}
        <Button
          endIcon={<ArrowForwardIosIcon />}
          variant="text"
          sx={{
            color: "#2D2D37",
            fontFamily: "Raleway",
            lineHeight: "36px",
            fontWeight: "500",
            textAlign: "left",
            textTransform: "none",
            textUnderlinePosition: "rom-font",
            textDecorationSkipInk: "none",
            fontSize: "24px",
            "&:hover": {
              backgroundColor: "transparent",
              color: "#000",
            },
          }}
        >
          More
        </Button>
      </Box>

      <Grid mt={5} mb={5} item>
        <Grid
          mt={5}
          mb={5}
          style={{ marginTop: "75px" }}
          container
          alignItems="center"
          justifyContent="center"
        >
          {girlsSportsShoesNumber.map((item, index) => (
            <Grid
              item
              key={index}
              className={`${styles.menRunningShoesContent}`}
            >
              <Image src={item.image} alt={item.title} />
              <p className={`${styles.MenRunningShoesHeading}`}>
                {item.heading}
              </p>
              <p className={`${styles.MenRunningShoesTitle}`}>{item.title}</p>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid className={`${styles.stepintostyleImage}`}>
        <p style={{ padding: "24% 0%" }}></p>
      </Grid>
    </Grid>
  );
};

export default HomePageSection;
