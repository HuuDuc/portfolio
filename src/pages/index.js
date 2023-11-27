import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Divider, Grid, Typography } from "@mui/material";
import ExternalLink from "../components/ExternalLink";

import Section from "../components/section";
import Layout from "../components/layout";
import Seo from "../components/seo";

const experiences = {
  canada: ["Semtech", "Sierra wireless"],
  taiwan: ["Style.me", "Nogle", "Asia Fusion Technology"],
  france: [
    "Webnet",
    "Vivaki",
    "Lagardère",
    "Marie Claire",
    "Querydyne",
    "Opteemo",
    "Espacemax",
  ],
};

const IndexPage = () => {
  const { t } = useTranslation();

  const node_packages = [
    {
      label: "react-fakeimg",
      link: "https://www.npmjs.com/package/react-fakeimg",
      description: t("publications.packages.react-fakeimg.description"),
    },
  ];

  return (
    <Layout>
      <Section text={t("about")}>
        <Grid md item>
          <div>
            <Grid container>
              <Grid item xs={12} md={3} lg={2}>
                <Typography variant="h3">motivation</Typography>
              </Grid>
              <Grid item md={9}>
                <Grid container>
                  <Grid item lg xl={6}>
                    <Typography>{t("about.motivator")}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Divider className="middle" />
              </Grid>
              <Grid item xs={12} md={3} lg={2}>
                <Typography variant="h3">{t("about.background")}</Typography>
              </Grid>
              <Grid item md={9}>
                <Grid container>
                  <Grid item lg xl={6}>
                    <Typography>{t("about.journey")}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Divider className="middle" />
              </Grid>
              <Grid item xs={12} md={3} lg={2}>
                <Typography variant="h3">{t("about.languages")}</Typography>
              </Grid>
              <Grid item md={9}>
                <Grid container>
                  <Grid item lg xl={6}>
                    <Typography>{t("about.language")}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Section>
      <Section text={t("skills")}>
        <Grid md item>
          <div>
            <Grid container>
              <Grid item xs={12} md={3} lg={2}>
                <Typography variant="h3">front-end</Typography>
              </Grid>
              <Grid item md={9}>
                <Typography>
                  HTML, CSS, javascript (ES6), Typescript, React, Testing
                  Library, Jest, Redux
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider className="middle" />
              </Grid>
              <Grid item xs={12} md={3} lg={2}>
                <Typography variant="h3">back-end</Typography>
              </Grid>
              <Grid item md={9}>
                <Typography>
                  Apache, PHP, Node.js, Laravel, Symfony, CodeIgniter,
                  Wordpress, Express, Adonis, MySQL, SQL Server, No SQL
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Section>
      <Section text={t("experiences")}>
        <Grid md item>
          <div>
            {Object.keys(experiences).map((country, i) => (
              <Grid container key={`country-${country}`}>
                {i > 0 && (
                  <Grid item xs={12}>
                    <Divider className="middle" />
                  </Grid>
                )}
                <Grid item xs={4} md={3} lg={2}>
                  <Typography variant="h3">{country}</Typography>
                </Grid>
                <Grid item xs={8} md={9}>
                  <Grid container spacing={3}>
                    {experiences[country].map((company) => (
                      <Grid key={`company-${company}`} item xs={6} md={4}>
                        <Typography>{company}</Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </div>
        </Grid>
      </Section>
      <Section text={t("publications")}>
        <Grid md item>
          <div>
            <Grid container>
              <Grid item xs={12} md={3} lg={2}>
                <Typography className="pb-10" variant="h3">
                  articles
                </Typography>
              </Grid>
              <Grid item>
                <Typography>{t("publications.soon")}</Typography>
              </Grid>
            </Grid>
          </div>
          <div>
            <Divider />
            <Grid container>
              <Grid item xs={12} md={3} lg={2}>
                <Typography className="pb-10" variant="h3">
                  node packages
                </Typography>
              </Grid>
              <Grid item md>
                {node_packages.map((node, i) => (
                  <div key={`node_${i}`}>
                    <Typography>
                      <ExternalLink href={node.link}>
                        <strong>{node.label}</strong>
                      </ExternalLink>
                      <dd>{node.description}</dd>
                    </Typography>
                  </div>
                ))}
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Section>

      <Section text={t("current")}>
        <Grid md item>
          <Grid container>
            <Grid item xs={12} md={3} lg={2}>
              <Typography variant="h3">role</Typography>
            </Grid>
            <Grid item md lg={3} xl={6}>
              <Typography>
                {t("contact.role")} @{" "}
                <ExternalLink href="https://www.sierrawireless.com/">
                  Sierra Wireless
                </ExternalLink>
                , {t("contact.role.semtech")}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider className="middle" />
            </Grid>
            <Grid item xs={12} md={3} lg={2}>
              <Typography variant="h3">{t("current.where")}</Typography>
            </Grid>
            <Grid item md lg={3} xl={6}>
              <Typography>{t("contact.role.timezone")} (UTC-08)</Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider className="middle" />
            </Grid>
            <Grid item xs={12} md={3} lg={2}>
              <Typography variant="h3">{t("elsewhere")}</Typography>
            </Grid>
            <Grid item md lg={3} xl={6}>
              <Typography>
                <ExternalLink href="https://github.com/huuduc">
                  Github
                </ExternalLink>
              </Typography>
              <Typography>
                <ExternalLink href="https://www.linkedin.com/in/stephanengn/">
                  Linkedin
                </ExternalLink>
              </Typography>
              <Typography>
                <ExternalLink href="https://leetcode.com/yoyodedongxi/">
                  Leetcode
                </ExternalLink>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider className="middle" />
            </Grid>
            <Grid item xs={12} md={3} lg={2}>
              <Typography variant="h3">{t("contact")}</Typography>
            </Grid>
            <Grid item md lg={3} xl={6}>
              <a href="mailto:s.nguyen@outlook.com">
                {t("contact.send.message")}
              </a>{" "}
              {t("contact.send.message.next")}.
            </Grid>
          </Grid>
        </Grid>
      </Section>
    </Layout>
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
