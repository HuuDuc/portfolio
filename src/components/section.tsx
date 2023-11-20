import React from "react";
import { Divider, Grid, Typography } from "@mui/material";

const Section = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}): JSX.Element => {
  return (
    <section>
      <Divider textAlign="left">{text}</Divider>
      <Grid container>
        <Grid item xs={12} md={3}>
          <Typography variant="h2" className="section-title">
            {text}
          </Typography>
        </Grid>
        {children}
      </Grid>
    </section>
  );
};

export default Section;
