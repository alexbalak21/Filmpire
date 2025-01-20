import React from "react"
import { CssBaseline } from "@mui/material"
import { Routes, Route } from "react-router"

import useStyles from "./styles"

import { Actors, Movies, NavBar, Profile, MovieInformation } from "./components"

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/movies/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
