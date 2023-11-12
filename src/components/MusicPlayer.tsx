import React from "react"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import Paper from "@mui/material/Paper"
import LinearProgress from "@mui/material/LinearProgress"

import FastForwardIcon from "@mui/icons-material/FastForward"
import FastRewindIcon from "@mui/icons-material/FastRewind"
import PauseCircleIcon from "@mui/icons-material/PauseCircle"
import PlayCircleIcon from "@mui/icons-material/PlayCircle"
import RepeatIcon from "@mui/icons-material/Repeat"
import RepeatOneIcon from "@mui/icons-material/RepeatOne"

import lofi from "./../medias/Still-Awake-Lofi-Study-Music(chosic.com).mp3"
import { Opacity } from "@mui/icons-material"

type TypeProps = {
  onBackward: () => void
  onEnded: () => void
  onForward: () => void
  onPause: () => void
  onPlay: () => void
  onStop: () => void
  theme: "dark" | "light"
}

const formatTime = time => {
  let minutes: string | number = Math.floor(time / 60)
  minutes = minutes >= 10 ? minutes : "0" + minutes
  let seconds: string | number = Math.floor(time % 60)
  seconds = seconds >= 10 ? seconds : "0" + seconds
  return minutes + ":" + seconds
}

let interval

const MusicPlayer = (props: TypeProps) => {
  const playerRef = React.useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false)
  const [isRepeating, setIsRepeating] = React.useState<boolean | number>(false)
  const [currentTime, setCurrentTime] = React.useState<string>("00:00")
  const [duration, setDuration] = React.useState<string>("00:00")

  const togglePlayer = () => {
    const nextIsPlaying = !isPlaying
    if (nextIsPlaying === true) {
      playerRef.current?.play()
      setDuration(formatTime(playerRef.current?.duration))
      clearInterval(interval)
      interval = setInterval(() => {
        setCurrentTime(formatTime(playerRef.current?.currentTime))
      }, 1000)
    } else {
      clearInterval(interval)
      playerRef.current?.pause()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleRepeat = () => {
    switch (isRepeating) {
      case false:
        setIsRepeating(true)
        break
      case true:
        setIsRepeating(1)
        break
      case 1:
        setIsRepeating(false)
        break
      default:
        setIsRepeating(false)
    }
  }

  const CentralIcon = !isPlaying ? PlayCircleIcon : PauseCircleIcon
  const ReptIcon = isRepeating === 1 ? RepeatOneIcon : RepeatIcon

  let progressPosition = 0
  if (playerRef.current) {
    progressPosition =
      (playerRef.current?.currentTime * 100) / playerRef.current?.duration
  }

  return (
    <Paper>
      <Grid
        container
        style={{ width: "100%" }}
        justifyContent="center"
        direction="column"
      >
        <Grid
          justifyContent="center"
          spacing={2}
          container
          alignItems="center"
          style={{ width: "100%" }}
        >
          <Grid item>
            <IconButton aria-label="fast-rewind">
              <FastRewindIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="play-circle" onClick={togglePlayer}>
              <CentralIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="fast-forward">
              <FastForwardIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="repeat" onClick={toggleRepeat}>
              <ReptIcon style={{ opacity: isRepeating === false ? 0.5 : 1 }} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          spacing={2}
          justifyContent="center"
          alignItems="center"
          container
          style={{ width: "100%" }}
        >
          <Grid item>{currentTime}</Grid>
          <Grid item lg={6}>
            <Box sx={{ width: "100%" }}>
              <LinearProgress variant="determinate" value={progressPosition} />
            </Box>
          </Grid>
          <Grid item>{duration}</Grid>
        </Grid>
      </Grid>
      <audio ref={playerRef} src={lofi} />
    </Paper>
  )
}

MusicPlayer.defaultProps = {
  theme: "light",
}

export default MusicPlayer
