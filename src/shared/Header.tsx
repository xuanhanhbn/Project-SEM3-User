import React, { useState } from "react";
import logo from "assets/images/logo/beauties-logo.png";
import { Link, useRouteMatch } from "react-router-dom";
import { Container } from "@mui/system";
import { Box, BoxProps } from "@mui/material";
import CustomButton from "shared/CustomButton";
import AddIcon from "@mui/icons-material/Add";
import CustomLink from "./CustomLink";

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        fontSize: "16px",
        fontWeight: "500",
        padding: "0px 23px",
        letterSpacing: "2px",
        ...sx,
      }}
      {...other}
    />
  );
}

const Header = () => {
  return (
    <Box
      mt={3}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <img src={logo} alt="logo" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "flex-start",
        }}
      >
        <Item>
          <CustomLink to="/" label="Home" activeOnlyWhenExact={true} />
        </Item>
        <Item>
          <CustomLink to="/about" label="About" />
        </Item>
        <Item>
          <CustomLink to="/service" label="Service" />
        </Item>
        <Item>
          <CustomLink to="/gallery" label="Gallery" />
        </Item>
        <Item>
          <CustomLink to="/blog" label="Blog" />
        </Item>
      </Box>
      <CustomButton variant="contained" color="secondary">
        Contact
      </CustomButton>
    </Box>
  );
};

export default Header;
