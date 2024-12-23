import styles from "./footer.module.css";
import React from "react";
import { Grid, Typography, Link, Button, Box } from "@mui/material";
import Image from "next/image";
import InstagramIcon from "../../assets/InstagramIcon.svg";
import TwitterIcon from "../../assets/TwitterIcon.svg";
import FacebookIcon from "../../assets/FacebookIcon.svg";
import LinkedInIcon from "../../assets/LinkedInIcon.svg";

const FooterSection: React.FC = () => {
  return (
    <Grid>
      <footer className={`${styles.footerContent}`}>
        <Grid container spacing={4}>
          {/* Support Section */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography className={`${styles.footerHeading}`}>
              SUPPORT
            </Typography>
            <Typography className={`${styles.footerLink}`}>
              <Link
                className={`${styles.footerLink}`}
                href="#"
                underline="hover"
              >
                Contact us
              </Link>
            </Typography>
            <Typography className={`${styles.footerLink}`}>
              <Link href="#" underline="hover">
                Promotions & Sale
              </Link>
            </Typography>
            <Typography className={`${styles.footerLink}`}>
              <Link href="#" underline="hover">
                Track Order
              </Link>
            </Typography>
            <Typography className={`${styles.footerLink}`}>
              <Link href="#" underline="hover">
                Privacy Policy
              </Link>
            </Typography>
            <Typography className={`${styles.footerLink}`}>
              <Link href="#" underline="hover">
                Terms & Conditions
              </Link>
            </Typography>
            <Typography className={`${styles.footerLink}`}>
              <Link href="#" underline="hover">
                Cookie Settings
              </Link>
            </Typography>
          </Grid>

          {/* FAQs Section */}
          <Grid item xs={12} sm={6} md={5}>
            <Typography className={`${styles.footerLink}`}>
              <Link href="#" underline="hover">
                FAQs
              </Link>
            </Typography>
            <Typography className={`${styles.footerLink}`}>
              <Link href="#" underline="hover">
                My Account
              </Link>
            </Typography>
            <Typography className={`${styles.footerLink}`}>
              <Link href="#" underline="hover">
                Return Policy
              </Link>
            </Typography>
            <Typography className={`${styles.footerLink}`}>
              <Link href="#" underline="hover">
                Tech Glossary
              </Link>
            </Typography>
            <Typography className={`${styles.footerLink}`}>
              <Link href="#" underline="hover">
                Initiate Return
              </Link>
            </Typography>
          </Grid>

          {/* About Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className={`${styles.footerHeading}`}>ABOUT</Typography>
            <Typography className={`${styles.footerLink}`}>
              <Link href="#" underline="hover">
                Company
              </Link>
            </Typography>
            <Typography className={`${styles.footerLink}`}>
              <Link href="#" underline="hover">
                Corporate News
              </Link>
            </Typography>
            <Typography className={`${styles.footerLink}`}>
              <Link href="#" underline="hover">
                Press Center
              </Link>
            </Typography>
            <Typography className={`${styles.footerLink}`}>
              <Link href="#" underline="hover">
                Investors
              </Link>
            </Typography>
            <Typography className={`${styles.footerLink}`}>
              <Link href="#" underline="hover">
                Sustainability
              </Link>
            </Typography>
            <Typography className={`${styles.footerLink}`}>
              <Link href="#" underline="hover">
                Careers
              </Link>
            </Typography>
            <Typography className={`${styles.footerLink}`}>
              <Link href="#" underline="hover">
                Store Finder
              </Link>
            </Typography>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography className={`${styles.footerHeading}`}>
              STAY UP TO DATE
            </Typography>
            <Grid container spacing={1}>
              <Grid item>
                <Link href="#" className="footer-social-icon">
                  <Image src={InstagramIcon} alt="" />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" className="footer-social-icon">
                  <Image src={TwitterIcon} alt="" />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" className="footer-social-icon">
                  <Image src={FacebookIcon} alt="" />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" className="footer-social-icon">
                  <Image src={LinkedInIcon} alt="" />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div
          style={{
            marginTop: "2%",
            color: "#DFE0E1",
            width: "100%",
            marginBottom: "30px",
            border: "1px solid #DFE0E1",
          }}
        ></div>

        <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              ":hover": { borderColor: "#DFE0E1", backgroundColor: "#181818" },
              padding: "1% 5%",
            }}
            className={`${styles.footerHeading}`}
          >
            INDIA
          </Button>
        </Box>
      </footer>
      <Grid
        container
        direction="row"
        sx={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
        className={`${styles.rightsReserved}`}
      >
        © HANO Tech, 2023. All Rights Reserved.
      </Grid>
    </Grid>
  );
};

export default FooterSection;
