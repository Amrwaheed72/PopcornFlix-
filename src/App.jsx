import { CssBaseline } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ActorsPage from "./pages/ActorsPage";
import MoviesPage from "./pages/MoviesPage";
import MovieInfoPage from "./pages/MovieInfoPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./ui/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <CssBaseline />
        <Navbar />
        <div>
          <Routes>
            <Route index path="/" element={<MoviesPage />} />
            <Route path="/actors/:id" element={<ActorsPage />} />
            <Route path="/movie/:id" element={<MovieInfoPage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
