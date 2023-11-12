/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "@mui/material/styles"
import { darkTheme, lightTheme } from "./muiTheme"
import { Container, Typography } from "@mui/material"
import { useTranslation } from "gatsby-plugin-react-i18next"

import Header from "./header"
import "./layout.scss"

const isBrowser = typeof window !== "undefined"

const Layout = ({ breadcrumbs = [], children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { t } = useTranslation()

  let fromSessionStorage = null
  if (isBrowser) {
    fromSessionStorage = window.sessionStorage.getItem("theme")
    if (fromSessionStorage === "dark") {
      document.body.classList.add("dark")
    }
  }

  const [theme, setTheme] = useState(
    ["light", "dark"].includes(fromSessionStorage)
      ? fromSessionStorage
      : "light"
  )

  useEffect(() => {}, [])

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light"
    if (nextTheme === "light") {
      window.sessionStorage.removeItem("theme")
      document.body.classList.remove("dark")
    } else {
      window.sessionStorage.setItem("theme", "dark")
      document.body.classList.add("dark")
    }
    setTheme(nextTheme)
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Container maxWidth={false}>
        <Header
          breadcrumbs={breadcrumbs}
          siteTitle={data.site.siteMetadata?.title || `Title`}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <main>{children}</main>
        <footer>
          <Typography className="footer-description">
            {t("footer.thisis")}
          </Typography>
        </footer>
      </Container>
    </ThemeProvider>
  )
}

export default Layout
