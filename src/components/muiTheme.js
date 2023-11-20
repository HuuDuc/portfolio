import { createTheme } from "@mui/material/styles";

const { breakpoints } = createTheme();

const containerStyle = {
  MuiContainer: {
    styleOverrides: {
      root: {
        [breakpoints.up("sm")]: {
          paddingBottom: "3.5rem",
          paddingLeft: "3.5rem",
          paddingRight: "3.5rem",
          paddingTop: "3.5rem",
        },
        [breakpoints.down("sm")]: {
          paddingBottom: "1rem",
          paddingTop: "1rem",
        },
      },
    },
  },
};

// const inputStyle = theme => ({
//   MuiOutlinedInput: {
//     styleOverrides: {
//       root: {
//         color: `${
//           theme === "light" ? "var(--color-text)" : "var(--color-code-bg)"
//         } !important`,
//       },
//     },
//   },
// })

const dividerStyle = (theme) => ({
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor:
          theme === "light" ? "var(--color-text)" : "var(--color-code-bg)",
        marginTop: 32,
        marginBottom: 32,
        "&:before": {
          width: 0,
        },
        "&:after": {
          width: "100%",
          borderColor:
            theme === "light" ? "var(--color-text)" : "var(--color-code-bg)",
        },
        "&.middle": {
          [breakpoints.down("md")]: {
            opacity: 0,
          },
        },
      },
      wrapper: {
        paddingLeft: 0,
        fontWeight: "bold",
        [breakpoints.up("md")]: {
          display: "none",
        },
      },
    },
  },
});

const typoStyle = (theme) => ({
  MuiTypography: {
    styleOverrides: {
      root: {
        fontSize: "var(--font-lg)",
        lineHeight: "inherit",
        color: `${
          theme === "light" ? "var(--color-text)" : "var(--color-code-bg)"
        } !important`,

        "& a": {
          color: "inherit",
        },

        "&.section-title": {
          [breakpoints.down("md")]: {
            display: "none",
          },
        },

        "&.footer-description": {
          fontSize: "5rem",
          [breakpoints.down("md")]: {
            fontSize: "2rem",
          },
          color: "var(--color-code-bg) !important",
        },

        "&.intro": {
          paddingTop: "6rem",
          paddingBottom: "6rem",
          fontSize: "3rem",
          fontWeight: "bold",
          letterSpacing: -1,
          lineHeight: 1,
          [breakpoints.down("md")]: {
            paddingTop: "4rem",
            paddingBottom: "4rem",
            fontSize: "1.8rem",
          },
        },
      },
      h2: { fontWeight: "bold" },
      h3: { fontWeight: "bold" },
      h6: { fontWeight: "bold" },
    },
  },
});

export const lightTheme = createTheme({
  components: {
    ...containerStyle,
    ...dividerStyle("light"),
    ...typoStyle("light"),
  },
});

export const darkTheme = createTheme({
  components: {
    ...containerStyle,
    ...dividerStyle("dark"),
    ...typoStyle("dark"),
  },
});
