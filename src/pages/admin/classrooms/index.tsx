import { Button, Container, Grid, Stack } from '@mui/material';
import React from 'react'

const Classrooms = () => {
  return (
    <Container>
      <Grid container>
        <Stack width={"100%"} direction={"row"}>
          <Button variant='outlined' color='primary' size='small'>New Classroom</Button>
        </Stack>
      </Grid>
    </Container>
  );
}

export default Classrooms;