import React from "react";
import { Box, Container, styled, Typography } from "@mui/material";

import { Outlet } from "react-router-dom";
import Header from "./Header";

const Footer = styled("footer")`
  padding: 0.4rem 1rem;
  background-color: #bbb;
`;

const MainLayout = () => {
  return (
    <Box>
      <Header />

      <Container disableGutters sx={{ minHeight: "calc(100vh - 6.3em)" }}>
        <Outlet />
      </Container>

      <Footer>
        <Typography>Feito com ❤️ por Breno Carvalho </Typography>
      </Footer>
    </Box>
  );
};

export default MainLayout;
