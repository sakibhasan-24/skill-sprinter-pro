import React from "react";

export default function Banner() {
  return (
    <div className="max-w-6xl mx-auto p-6 my-12 flex flex-col md:flex-col lg:flex-row gap-6 items-center justify-center">
      <div className="w-1/2 text-center space-y-6">
        <h1 className="font-bold text-4xl sm:text-6xl space-y-4 ">
          Lets share Our <br />
          <span className="text-orange-600 font-extrabold">Knowledge</span>
        </h1>
        <p className="text-slate-600 font-semibold text-2xl ">
          together we will take care our knowledge
        </p>
      </div>
      <div className="w-full sm:w-1/2 mx-auto ">
        <img
          className="rounded-lg p-4"
          src="https://s29814.pcdn.co/wp-content/uploads/2022/12/shutterstock_1847661151.jpg.optimal.jpg"
          alt="image"
        />
      </div>
    </div>
  );
}
