import React, { useEffect, useState } from "react";
// import { Rating } from "react-simple-star-rating";
import "./Reviews.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { PiChatCircleTextThin } from "react-icons/pi";
import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import striptags from "striptags";

export default function Reviews() {
  const [rating, setRating] = useState(2.5);
  const [message, setMessage] = useState("");
  const axiosPublic = useAxiosPublic();
  const handleRating = (rate) => {
    setRating(rate);

    // other logic
  };
  const handleFormData = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const reviewData = { name, email, rating, message };

    const response = await axiosPublic.post("/reviews", reviewData);
    console.log(response.data);
    if (response.data.success === true) {
      Swal.fire({
        icon: "success",
        title: "Your review has been submitted",
        timer: 1500,
      });
    }
    if (response.data.success === false) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${response.data.message}`,
      });
    }
  };
  const onPointerMove = (value, index) => console.log(value, index);

  //   get reviews
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://skill-sprinter-pro-server.vercel.app/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div className="my-12 max-w-6xl mx-auto shadow-2xl  flex  justify-evenly items-center ">
        <div>
          <Rating
            onClick={handleRating}
            initialValue={rating}
            transition={true}
            //   starColor="#ffd700"
            allowFraction={true}
            allowHalfIcon={true}
            tooltipDefaultText="rating"
            value={rating}
            onChange={setRating}
            style={{ maxWidth: 200, textAlign: "center" }}
          />
          <form
            onSubmit={handleFormData}
            className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="editor"
                className="block text-gray-700 font-bold "
              >
                Message
              </label>
              <div className="bg-white rounded-lg shadow-md">
                <ReactQuill
                  id="message"
                  name="message"
                  theme="snow"
                  onChange={(content) => {
                    setMessage(content);
                  }}
                  className="min-h-[100%]"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 my-12 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* review */}
      <div className="max-w-4xl mx-auto space-y-4 p-8">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex items-center justify-center flex-col w-1/2 mx-auto">
                <PiChatCircleTextThin className="font-bold text-7xl" />
                <Rating
                  className="flex items-center justify-center"
                  value={review.rating}
                  style={{ maxWidth: 180 }}
                  readOnly
                />
                <p className="my-6">{striptags(review.message)}</p>
                <h3 className="font-bold text-3xl  text-orange-500">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
