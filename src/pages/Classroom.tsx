import { Container, Grid } from "@mui/material";
import MainCard from "../components/MainCard";

const Classroom = () => {
  return (
    <Container color="black" style={{backgroundColor: "plum"}}>
      <Grid sx={{ height: "100vh", px: 5 }} alignItems={"center"} container>
        <MainCard>
          something
        </MainCard>
      </Grid>
    </Container>
  );
};

export default Classroom;
