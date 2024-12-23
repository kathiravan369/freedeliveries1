import React, { useMemo } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import homeLogo from "../../assets/homeLogo.svg";
import { Box, Button, Grid } from "@mui/material";
import Link from "next/link";
import shoppingIcon from "../../assets/shoppingIcon.svg";
import headIcon from "../../assets/headIcon.svg";
import peopleIcon from "../../assets/peopleIcon.svg";
const NavbarSection: React.FC = () => {
  const navItems = useMemo(
    () => [
      { label: "New", href: "/", id: "home" },
      { label: "Women", href: "/", id: "home" },
      { label: "Men", href: "/", id: "home" },
      { label: "Kids", href: "/", id: "home" },
      { label: "Luka x HANO", href: "/", id: "home" },
      { label: "Sports", href: "/", id: "home" },
    ],
    []
  );

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      className={`${styles.navbar}`}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        item
        md={2}
        mt={2}
        className={`${styles.homeLogoHeading}`}
      >
        <Grid style={{ position: "relative", justifyContent: "center" }}>
          {" "}
          <span style={{ position: "relative" }}>H</span>
          <Image className={`${styles.homeLogoImages}`} src={homeLogo} alt="" />
          <span style={{ position: "relative", left: "60%" }}>NO</span>
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        item
        md={7}
        mt={2}
      >
        <Grid item xs className={`${styles.menu}`}>
          <Grid item container justifyContent="center" spacing={5}>
            {navItems.map((item, index) => (
              <Grid item key={index}>
                <Link
                  href={item.href}
                  style={{ textDecoration: "none" }}
                  passHref
                  aria-label={item.label}
                >
                  <span className={`${styles.link}`}>{item.label}</span>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        mt={2}
        alignItems="center"
        justifyContent="center"
        item
        md={3}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
          <Button className={`${styles.searchButton}`} variant="outlined">
            Search
          </Button>
          <Image src={headIcon} alt="" />
          <Image src={shoppingIcon} alt="" />
          <Image src={peopleIcon} alt="" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default NavbarSection;
