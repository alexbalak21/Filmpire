import React from "react"
import { CssBaseline } from "@mui/material"
import { Routes, Route } from "react-router"

const App = () => (
  <div>
    <CssBaseline />
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
    </Routes>
  </div>
)

export default App
