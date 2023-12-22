import moment from "moment";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { useParams } from "react-router-dom";

export default function DetailsAssignment() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      await fetch(`http://localhost:5000/get/assignment/${id}`, {
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          setDetails(data);
        });
    };
    loadData();
  }, [id]);
  const submissionDate = moment(details.date).valueOf();

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <p>times up but you can submit</p>;
    } else {
      // Render a countdown
      return (
        <div>
          {days > 0 && `${days} days `}
          {hours > 0 && `${hours} hours `}
          {minutes > 0 && `${minutes} minutes `}
          {seconds > 0 && `${seconds} seconds`}
          {/* <span className="ml-2">left </span> */}
        </div>
      );
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 my-12">
      <div className="w-full md:w-1/2 mx-auto p-6 shadow-lg bg-slate-100 rounded-lg">
        <h1 className="text-slate-700 font-bold text-center text-2xl">
          Details Assignment for {details.title}
        </h1>
        <div>
          <img
            src={details.image}
            alt="image"
            className="rounded-lg p-4 w-full h-1/2"
          />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-center">
            {details.description}
          </h1>
          <p className="text-slate-700 font-extrabold text-center text-2xl">
            Marks allocated: {details.marks}
          </p>

          <div className="bg-indigo-500 text-white p-4 rounded-md font-extrabold ">
            <Countdown date={submissionDate} renderer={renderer} />
          </div>
        </div>
      </div>
    </div>
  );
}
