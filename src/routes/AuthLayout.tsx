import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default AuthLayout;
