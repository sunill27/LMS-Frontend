import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "./config";

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const fetchBook = async () => {
    const response = await axios.get(`${backendUrl}/book/${id}`);
    if (response.status === 200) {
      setBook(response.data.data);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  const navigate = useNavigate();
  const handleDelete = async () => {
    const response = await axios.delete(`${backendUrl}/book/${id}`);
    if (response.status === 200) {
      navigate("/");
    } else {
      alert("Failed to delete the book");
    }
  };
  return (
    <>
      <Navbar />
      <div className="max-w-[70rem] px-4 py-10 sm:px-6  lg:px-8 lg:py-14 mx-auto mt-10">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            <img
              src={
                book?.imageUrl
                  ? book?.imageUrl
                  : "https://gifts.thechosen.tv/cdn/shop/files/3_95414a2d-ec35-40ba-b2af-68b4a46b0dc8.png?v=1701512210"
              }
              className="rounded-xl"
              alt="Book Image"
            />
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-black dark:text-neutral-800">
                  {book?.bookName}
                </h2>
                <p className="text-black dark:text-neutral-800">
                  Price: {book?.bookPrice}
                </p>
                <p className="text-black dark:text-neutral-800">
                  Price: {book?.bookPrice}
                </p>
                <p className="text-black dark:text-neutral-800">
                  Author: {book?.authorName}
                </p>
                <p className="text-black dark:text-neutral-800">
                  IsbnNumber: {book?.isbnNumber}
                </p>
                <p className="text-black dark:text-neutral-800">
                  Publication: {book?.publication}
                </p>
                <p className="text-black dark:text-neutral-800">
                  Published At: {book?.publishedAt}
                </p>
                <div className="card-actions">
                  <Link to={`/editbook/${book._id}`}>
                    <button className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={handleDelete}
                    className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBook;
