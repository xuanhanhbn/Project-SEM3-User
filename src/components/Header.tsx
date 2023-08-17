import React, { useEffect, useState } from "react";
import logo from "assets/images/logo/logo.png";
import { Box, BoxProps } from "@mui/material";
import CustomButton from "components/CustomButton";
import CustomLink from "./CustomLink";
import useScrollTrigger from '@mui/material/useScrollTrigger';

export interface SelectedRoute {
  path: string;
  label: string;
  active: boolean;
}

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
  const trigger = useScrollTrigger();
  const routeArr: SelectedRoute[] = [
    {
      path: "/",
      label: "Home",
      active: true,
    },
    {
      path: "/about",
      label: "About",
      active: false,
    },
    {
      path: "/service",
      label: "Service",
      active: false,
    },
    {
      path: "/gallery",
      label: "Gallery",
      active: false,
    },
    {
      path: "/blog",
      label: "Blog",
      active: false,
    }
  ];
  const listItems = routeArr.map((route: SelectedRoute) => {
    return (
      <Item key={route.path}>
        <CustomLink to={route.path} label={route.label} activeOnlyWhenExact={route.active}></CustomLink>
      </Item>
    )
  })
  return (
    <Box sx={{
      position: "sticky",
      top: "10px",
      zIndex: 1,
    }}>
      <Box
        sx={{
          marginTop: "25px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Box>
          <img style={{width:'80px',height:'80px'}} src={logo} alt="logo" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "flex-start",
          }}
        >
          {listItems}
        </Box>
        <CustomButton variant="contained" color="secondary">
          Loginn
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Header;
