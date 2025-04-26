import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleBook from "./pages/SingleBook";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<SingleBook />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/editbook/:id" element={<EditBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
