import { Typography, Grid, styled, Stack } from "@mui/material";
import LoginForm from "../../components/LoginForm";

const HeroHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "playfair display",
  fontSize: 80,
  fontWeight: 500,
  textTransform: "capitalize",
  lineHeight: 1,
  //   color: theme.palette.neutral[800],
  // color: theme.palette.background.paper,
}));

const Login = () => {
  return (
    <>
      <Grid sx={{ height: "100vh", px: 5 }} alignItems={"center"} container>
        <Grid sm={6} item>
          <Stack spacing={2} alignItems={"flex-start"}>
            <Stack spacing={1}>
              <HeroHeading>Welcome Back Learner 🎉</HeroHeading>
              <LoginForm />
            </Stack>
          </Stack>
        </Grid>

        <Grid sx={{ display: "flex", justifyContent: "flex-end" }} sm={6} item>
          <img
            src="/images/login.svg"
            style={{ height: "30vmax" }}
            alt="smartclass"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
