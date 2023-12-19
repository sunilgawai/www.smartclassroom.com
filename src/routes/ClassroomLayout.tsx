import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const ClassroomLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default ClassroomLayout;
