import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "./config.js";

const AddBook = () => {
  //1st way:
  // const [bookName, setBook] = useState("");
  // const [bookPrice, setBookPrice] = useState("");
  // const [isbnNumber, setIsbnNumber] = useState(null);
  // const [authorName, setAuthorName] = useState("");
  // const [publishedAt, setPublishedAt] = useState("");
  // const [publication, setPublication] = useState("");
  // const [image, setImage] = useState(null);

  // console.log(
  //   bookName,
  //   bookPrice,
  //   isbnNumber,
  //   authorName,
  //   publishedAt,
  //   publication,
  //   image
  // );

  // const handleSubmmit = async (e) => {
  //   e.preventDefault();
  //   const response = await axios.post(
  //     "http://localhost:3000/book/",
  //     {
  //       bookName,
  //       bookPrice,
  //       isbnNumber,
  //       authorName,
  //       publishedAt,
  //       publication,
  //       image,
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     }
  //   );
  // };

  //2nd way:
  const navigate = useNavigate();
  const [data, setData] = useState({
    bookName: "",
    bookPrice: "",
    isbnNumber: "",
    authorName: "",
    publishedAt: "",
    publication: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("image", image);
    const response = await axios.post(`${backendUrl}/book/`, formData);
    if (response.status === 200) {
      navigate("/");
    } else {
      alert("Something went wrong.");
    }
  };
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center p-12 mt-15">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form onSubmit={handleSubmmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Book Name:
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="bookName"
                id="bookName"
                placeholder="bookName"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="price"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Price:
              </label>
              <input
                onChange={handleChange}
                type="number"
                name="bookPrice"
                id="bookPrice"
                placeholder="bookPrice"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="author"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Author:
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="authorName"
                id="authorName"
                placeholder="authorName"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="isbnNumber"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                IsbnNumber:
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="isbnNumber"
                id="isbnNumber"
                placeholder="isbnNumber"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="date"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Published Date:
              </label>
              <input
                onChange={handleChange}
                type="date"
                name="publishedAt"
                id="publishedAt"
                placeholder="publishedAt"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="publication"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Publication:
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="publication"
                id="publication"
                placeholder="publication"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="image"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Image:
              </label>
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                name="image"
                id="image"
                placeholder="image"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div>
              <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBook;
