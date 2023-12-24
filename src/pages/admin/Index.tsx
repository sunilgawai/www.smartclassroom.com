import { Container, Grid } from "@mui/material";
import React from "react";
import AnalyticEcommerce from "../../components/cards/statistics/AnalyticEcommerce";

const AdminPage = () => {
  return (
    <div>
      <Container color="black">
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AnalyticEcommerce title="Total Students" count={"100"} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AnalyticEcommerce title="Total Teachers" count={"100"} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AnalyticEcommerce title="Total Classes" count={"100"} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AnalyticEcommerce title="Total Subjects" count={"100"} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AnalyticEcommerce isLoss={true} title="Total Staffs" count={"100"} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AdminPage;
