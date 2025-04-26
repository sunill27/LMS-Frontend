import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";
import { backendUrl } from "./config";

const Home = () => {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const response = await axios.get(`${backendUrl}/book`);
    if (response.status === 200) {
      setBooks(response.data.data);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  console.log(books);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-2 mx-2">
        {books.length > 0 &&
          books.map((book) => {
            return <Card book={book} key={book._id} />;
          })}
      </div>
    </>
  );
};

export default Home;
