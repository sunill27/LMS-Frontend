import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "./config";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    bookName: "",
    bookPrice: "",
    isbnNumber: "",
    authorName: "",
    publishedAt: "",
    publication: "",
  });

  const [image, setImage] = useState();

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
    const response = await axios.patch(`${backendUrl}/book/${id}`, formData);
    if (response.status === 200) {
      navigate("/book/" + id);
    } else {
      alert("Something went wrong.");
    }
  };

  const fetchBook = async () => {
    const response = await axios.get(`${backendUrl}/book/${id}`);
    if (response.status === 200) {
      setData(response.data.data);
    }
  };
  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center p-12 mt-10">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <h1 className="text-2xl text-center font-bold text-blue-500 mb-2">
            Edit Book
          </h1>
          <form onSubmit={handleSubmmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Book Name:
              </label>
              <input
                value={data.bookName}
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
                value={data.bookPrice}
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
                value={data.authorName}
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
                value={data.isbnNumber}
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
                htmlFor="publication"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Publication:
              </label>
              <input
                value={data.publication}
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
                htmlFor="date"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Published Date:
              </label>
              <input
                value={data.publishedAt}
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
                htmlFor="image"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                {/* To show old image in editbook page: */}
                {data.imageUrl && (
                  <div className="mb-4">
                    <img
                      src={data.imageUrl}
                      alt="image"
                      className="w-50 h-auto rounded-md"
                    />
                  </div>
                )}
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
                Apply Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditBook;
