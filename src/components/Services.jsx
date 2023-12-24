import React, { useEffect, useState } from "react";
import Service from "./Service";

export default function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="max-w-6xl mx-auto p-6 my-12">
      <h1 className="text-5xl text-center font-bold">
        Why <span className="text-orange-500">Us</span>?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service service={service} key={service._id} />
        ))}
      </div>
    </div>
  );
}
