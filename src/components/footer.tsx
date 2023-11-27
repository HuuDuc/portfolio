import { Grid, SvgIcon } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";

const MountainIcon = ({ fontSize, style }) => {
  return (
    <SvgIcon style={style} fontSize={fontSize}>
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
      >
        <path d="M256 32c12.5 0 24.1 6.4 30.8 17L503.4 394.4c5.6 8.9 8.6 19.2 8.6 29.7c0 30.9-25 55.9-55.9 55.9H55.9C25 480 0 455 0 424.1c0-10.5 3-20.8 8.6-29.7L225.2 49c6.6-10.6 18.3-17 30.8-17zm65 192L256 120.4 176.9 246.5l18.3 24.4c6.4 8.5 19.2 8.5 25.6 0l25.6-34.1c6-8.1 15.5-12.8 25.6-12.8h49z" />
      </svg>
    </SvgIcon>
  );
};

const CarIcon = () => {
  return (
    <SvgIcon className="vehicule">
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 640 512"
      >
        <path d="M171.3 96H224v96H111.3l30.4-75.9C146.5 104 158.2 96 171.3 96zM272 192V96h81.2c9.7 0 18.9 4.4 25 12l67.2 84H272zm256.2 1L428.2 68c-18.2-22.8-45.8-36-75-36H171.3c-39.3 0-74.6 23.9-89.1 60.3L40.6 196.4C16.8 205.8 0 228.9 0 256V368c0 17.7 14.3 32 32 32H65.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H385.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H608c17.7 0 32-14.3 32-32V320c0-65.2-48.8-119-111.8-127zM434.7 368a48 48 0 1 1 90.5 32 48 48 0 1 1 -90.5-32zM160 336a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
      </svg>
    </SvgIcon>
  );
};

const CloudIcon = ({ fontSize, style }) => {
  return (
    <SvgIcon style={style} fontSize={fontSize}>
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 640 512"
      >
        <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" />
      </svg>
    </SvgIcon>
  );
};

const HelicopterIcon = () => {
  return (
    <SvgIcon className="helicopter">
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 640 512"
      >
        <path d="M128 32c0-17.7 14.3-32 32-32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H384v64h32c88.4 0 160 71.6 160 160v64c0 17.7-14.3 32-32 32H384 320c-20.1 0-39.1-9.5-51.2-25.6l-71.4-95.2c-3.5-4.7-8.3-8.3-13.7-10.5L47.2 198.1c-9.5-3.8-16.7-12-19.2-22L5 83.9C2.4 73.8 10.1 64 20.5 64H48c10.1 0 19.6 4.7 25.6 12.8L112 128H320V64H160c-17.7 0-32-14.3-32-32zM384 320H512V288c0-53-43-96-96-96H384V320zM630.6 425.4c12.5 12.5 12.5 32.8 0 45.3l-3.9 3.9c-24 24-56.6 37.5-90.5 37.5H256c-17.7 0-32-14.3-32-32s14.3-32 32-32H536.2c17 0 33.3-6.7 45.3-18.7l3.9-3.9c12.5-12.5 32.8-12.5 45.3 0z" />
      </svg>
    </SvgIcon>
  );
};

const Footer = () => {
  return (
    <footer>
      <Marquee>
        <HelicopterIcon />
      </Marquee>

      <div className="clouds">
        <Marquee className="closer3" speed={12}>
          <div style={{ width: "100vw" }}>
            <Grid container spacing={5} style={{ marginLeft: 10 }}>
              <Grid item xs={1}>
                <CloudIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="small"
                />
              </Grid>
              <Grid item xs={1}>
                <CloudIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="small"
                />
              </Grid>
              <Grid item xs={1}>
                <CloudIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="small"
                />
              </Grid>
              <Grid item xs={1}>
                <CloudIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="small"
                />
              </Grid>
              <Grid item xs={1}>
                <CloudIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="small"
                />
              </Grid>
              <Grid item xs={1}>
                <CloudIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="small"
                />
              </Grid>
              <Grid item xs={1}>
                <CloudIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="small"
                />
              </Grid>
              <Grid item xs={1}>
                <CloudIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="small"
                />
              </Grid>
              <Grid item xs={1}>
                <CloudIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="small"
                />
              </Grid>
              <Grid item xs={1}>
                <CloudIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="small"
                />
              </Grid>
              <Grid item xs={1}>
                <CloudIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="small"
                />
              </Grid>
            </Grid>
          </div>
        </Marquee>

        <Marquee className="closer2" speed={15}>
          <div style={{ width: "100vw" }}>
            <Grid container style={{ marginLeft: 15 }}>
              <Grid item xs={3}>
                <CloudIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="medium"
                />
              </Grid>
              <Grid item xs={3}>
                <CloudIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="medium"
                />
              </Grid>
              <Grid item xs={3}>
                <CloudIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="medium"
                />
              </Grid>
              <Grid item xs={3}>
                <CloudIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="medium"
                />
              </Grid>
            </Grid>
          </div>
        </Marquee>

        <Marquee className="closer1" speed={18}>
          <div style={{ width: "100vw" }}>
            <Grid container style={{ marginLeft: 12 }}>
              <Grid item xs={4}>
                <CloudIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="large"
                />
              </Grid>
              <Grid item xs={4}>
                <CloudIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="large"
                />
              </Grid>
              <Grid item xs={4}>
                <CloudIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="large"
                />
              </Grid>
            </Grid>
          </div>
        </Marquee>
      </div>

      <div className="moutains">
        <Marquee className="closer3" speed={12}>
          <div style={{ width: "100vw" }}>
            <Grid container spacing={5}>
              <Grid item xs={2}>
                <MountainIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="small"
                />
              </Grid>
              <Grid item xs={2}>
                <MountainIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="small"
                />
              </Grid>
              <Grid item xs={2}>
                <MountainIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="small"
                />
              </Grid>
              <Grid item xs={2}>
                <MountainIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="small"
                />
              </Grid>
              <Grid item xs={2}>
                <MountainIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="small"
                />
              </Grid>
              <Grid item xs={2}>
                <MountainIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="small"
                />
              </Grid>
            </Grid>
          </div>
        </Marquee>

        <Marquee style={{ marginTop: 10 }} className="closer2" speed={15}>
          <div style={{ width: "100vw" }}>
            <Grid container>
              <Grid item xs={4}>
                <MountainIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="large"
                />
              </Grid>
              <Grid item xs={4}>
                <MountainIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="large"
                />
              </Grid>
              <Grid item xs={4}>
                <MountainIcon
                  style={{ marginTop: Math.floor(Math.random() * 20) }}
                  fontSize="large"
                />
              </Grid>
            </Grid>
          </div>
        </Marquee>
      </div>

      <div className="road">
        <Grid container spacing={6} justifyContent="center">
          <Grid item>
            <CarIcon />
          </Grid>
        </Grid>
      </div>
      <Marquee className="road-dashed" autoFill speed={20}>
        &nbsp;-&nbsp;
      </Marquee>
    </footer>
  );
};

export default Footer;
