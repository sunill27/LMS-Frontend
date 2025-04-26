import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ book }) => {
  const navigate = useNavigate;
  return (
    <>
      <div
        className="card bg-base-100 w-80 shadow-sm mt-20 mx-2"
        key={book._id}
      >
        <figure className="px-1 pt-1">
          <img
            src={
              book?.imageUrl
                ? book?.imageUrl
                : "https://gifts.thechosen.tv/cdn/shop/files/3_95414a2d-ec35-40ba-b2af-68b4a46b0dc8.png?v=1701512210"
            }
            alt="Book"
            className="w-full rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">{book?.bookName}</h2>
          <p className="text-lg md:text-base sm:text-sm">
            Price: Rs. {book?.bookPrice}
          </p>
          <p className="text-lg md:text-base sm:text-sm">
            Author: {book?.authorName}
          </p>
          <p className="text-lg md:text-base sm:text-sm">
            IsbnNumber: {book?.isbnNumber}
          </p>
          <p className="text-lg md:text-base sm:text-sm">
            Publication: {book?.publication}
          </p>
          <div className="card-actions">
            <button className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">
              <Link to={`/book/${book._id}`}>See more</Link>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
