import React from "react";
import { ThreeCircles } from "react-loader-spinner";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center  my-12">
      render(
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      )
    </div>
  );
}
