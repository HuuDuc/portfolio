import * as React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import LooksIcon from "@mui/icons-material/Looks";
import { Grid } from "@mui/material";

import Seo from "../components/seo";
import "../components/layout.scss";

const NotFoundPage = () => {
  const { language } = useI18next();
  return (
    <div className="page-404">
      <div className="content">
        <Grid container alignItems="center" width="auto">
          <Grid item>
            <HighlightOffIcon fontSize="large" className="from-404" />
          </Grid>
          <Grid item>
            <HighlightOffIcon fontSize="large" className="from-404" />
          </Grid>
        </Grid>
        <LooksIcon className="from-404" />
        <Link language={language} to="/">
          back to the home page
        </Link>
      </div>
    </div>
  );
};

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
