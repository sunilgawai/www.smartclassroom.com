import {
  Typography,
  Button,
  Grid,
  styled,
  Stack,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

const HeroHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "playfair display",
  fontSize: 130,
  fontWeight: 500,
  textTransform: "capitalize",
  lineHeight: 1,
  //   color: theme.palette.neutral[800],
  // color: theme.palette.background.paper,
}));

const HeroSubHeading = styled(Typography)(({ theme }) => ({
  //   color: theme.palette.neutral.lightChannel,
  // color: theme.palette.primary.light,
  fontFamily: "Poppins",
  width: "80%",
}));

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Grid sx={{ height: "100vh", px: 5 }} alignItems={"center"} container>
        <Grid sm={6} item>
          <Stack spacing={2} alignItems={"flex-start"}>
            <HeroHeading>Smart Classroom</HeroHeading>
            <HeroSubHeading>
              A web app for students and teacher to have proper classroom
              communication. App contains features such as Auth, Role,
              Permissions, File, Notes sharing, Attendance tracking and
              real-time chat with notifications with socket connections.
            </HeroSubHeading>
            <Stack direction={"row"} spacing={1.5}>
              <Button color="primary" style={{ border: "1px solid lightblue" }}>
                submit questions
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to="classroom"
                color="warning"
              >
                Enter Classroom 🎉
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid sx={{ display: "flex", justifyContent: "flex-end" }} sm={6} item>
          <img
            src="/images/hero.svg"
            style={{ height: "30vmax" }}
            alt="smartclass"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
