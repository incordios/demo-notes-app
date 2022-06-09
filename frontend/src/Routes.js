import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    <Route path="/notes/new" element={<NewNote />} />
        <Route path="/notes/:id" element={<Notes />} />
            <Route path="*" element={<NotFound />} />;
    </Routes>
  );
}
