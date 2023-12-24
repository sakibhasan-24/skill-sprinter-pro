import React from "react";

export default function Service({ service }) {
  console.log(service);
  return (
    <div className="w-4/5 mx-auto shadow-lg p-2  my-6 rounded-lg flex  flex-col ">
      <div className="w-full  flex-1 ">
        <img src={service.image} alt="image" />
      </div>
      <div className="text-center my-6">
        <h1 className="font-bold text-center text-xl text-slate-600">
          {service.title}
        </h1>
        <p className="text-slate-500 font-serif">{service.short_description}</p>
      </div>
    </div>
  );
}
