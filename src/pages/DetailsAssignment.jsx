import moment from "moment";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { Link, useParams } from "react-router-dom";

export default function DetailsAssignment() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      await fetch(
        `https://skill-sprinter-pro-server.vercel.app/get/assignment/${id}`,
        {
          credentials: "include",
        }
      )
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
        </div>
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 my-12">
      <div className="w-full  mx-auto p-6 shadow-lg bg-slate-100 rounded-lg">
        <h1 className="text-slate-700 font-bold text-center text-2xl">
          Details Assignment for {details.title}
        </h1>
        <div className="w-96 mx-auto">
          <img
            src={details.image}
            alt="image"
            className="rounded-lg p-4 w-full h-1/2"
          />
        </div>
        <div className=" ">
          <p className="sm:text-xs md:text-lg font-semibold bg-red-40 ">
            {details.description}
          </p>
          <div>
            <p className="text-slate-700 font-extrabold text-center text-xl md:text-2xl">
              Marks allocated: {details.marks}
            </p>
          </div>

          <div className="bg-indigo-500 text-white p-4 rounded-md font-extrabold ">
            <Countdown date={submissionDate} renderer={renderer} />
          </div>
          <div>
            <button className="w-full px-4 py-3 rounded-lg font-bold uppercase bg-slate-700 text-white my-4">
              <Link to={`/submit/assignment/${details._id}`}>
                Take Assignment
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
