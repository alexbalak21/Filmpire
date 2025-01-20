import React from "react"
import { CssBaseline } from "@mui/material"
import { Routes, Route } from "react-router"
import { Actors, Movies, NavBar, Profile, MovieInformation } from "./components"

const App = () => (
  <main>
    <CssBaseline />
    <NavBar />
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/movies/:id" element={<MovieInformation />} />
      <Route path="/actors/:id" element={<Actors />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  </main>
)

export default App
