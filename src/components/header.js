import * as React from "react";
import { Grid, Typography } from "@mui/material";
import { useTranslation, Link, useI18next } from "gatsby-plugin-react-i18next";

import Breadcrumbs from "@mui/material/Breadcrumbs";

import LightModeIcon from "@mui/icons-material/LightModeOutlined";
import NightlightIcon from "@mui/icons-material/NightlightOutlined";

const Header = ({ breadcrumbs, theme, toggleTheme }) => {
  const { t } = useTranslation();
  const { languages, language, originalPath } = useI18next();
  const nextLanguage = languages.find((lng) => lng !== language);
  return (
    <header>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          {/* <Typography variant="h1">
            Stéphane <strong>Nguyen</strong>
          </Typography> */}

          <Breadcrumbs aria-label="breadcrumb">
            <Typography variant="h1">
              <Link to="/" style={{ textDecoration: "none" }}>
                Stéphane <strong>Nguyen</strong>
              </Link>
            </Typography>
            {breadcrumbs.map((breadcrumb) => (
              <Typography key={breadcrumb} color="text.primary">
                React-fakeimg
              </Typography>
            ))}
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <Link language={nextLanguage} to={originalPath}>
                {nextLanguage}
              </Link>
            </Grid>
            <Grid item>
              <button className="icon-theme no-button" onClick={toggleTheme}>
                {theme === "light" ? (
                  <NightlightIcon fontSize="small" />
                ) : (
                  <LightModeIcon fontSize="small" />
                )}
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {breadcrumbs.length === 0 && (
        <Grid container rowSpacing={0} spacing={0}>
          <Grid item lg={8} xl={6}>
            <Typography className="intro">{t("intro")}</Typography>
          </Grid>
        </Grid>
      )}
    </header>
  );
};

export default Header;
