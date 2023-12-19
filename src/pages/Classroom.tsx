import { Typography, Button, Grid, styled, Stack } from "@mui/material";
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

const Classroom = () => {
  return (
    <>
      <Grid sx={{ height: "100vh", px: 5 }} alignItems={"center"} container>
        <Grid sm={6} item>
          <Stack spacing={2} alignItems={"flex-start"}>
            <HeroHeading>Smart Classroom</HeroHeading>
            <HeroSubHeading>
              Embark on your quest for excellence with access to a goldmine of
              questions that hold the key to unlocking your academic potential.
              Prepare with precision, practice with purpose, and achieve
              remarkable results.
            </HeroSubHeading>
            <Stack direction={"row"} spacing={1.5}>
              <Button color="primary" style={{ border: "1px solid lightblue" }}>
                submit questions
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to=""
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
    </>
  );
};

export default Classroom;
