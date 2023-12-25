import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditAssignment() {
  const { id } = useParams();

  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  //   console.log(id);
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
  const handleUpdateData = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const title = formData.get("title");
    const date = formData.get("date");
    const image = formData.get("image");
    const description = formData.get("description");
    const marks = formData.get("marks");
    const category = formData.get("level");
    const information = {
      title,
      date,
      image,
      description,
      marks,
      category,
    };
    // console.log(information);
    fetch(
      `https://skill-sprinter-pro-server.vercel.app/edit/assignment/${id}`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(information),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          setLoading(false);
          return toast.success("save the changes");
        }
      });
  };
  return (
    <div>
      <div className="max-w-6xl mx-auto my-8 py-6 ">
        <h1 className="text-slate-700 font-bold text-center my-6 text-xl md:text-5xl">
          Update
        </h1>
        <form onSubmit={handleUpdateData}>
          <div className="max-w-5xl mx-auto ">
            <div className="flex flex-col my-2 p-2">
              <h1 className="text-center font-bold text-xl my-2 text-slate-600">
                title
              </h1>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="title"
                defaultValue={details.title}
                className="w-full rounded-md  md:w-1/2 md:mx-auto bg-slate-300 focus:outline-none px-4 py-3"
              />
            </div>
            <div className="flex flex-col my-2 p-2">
              <h1 className="text-center font-bold text-xl my-2 text-slate-600">
                description
              </h1>
              <textarea
                type="text"
                id="description"
                name="description"
                placeholder="description"
                defaultValue={details.description}
                className="w-full rounded-md  md:w-1/2 md:mx-auto bg-slate-300 focus:outline-none px-4 py-3"
              />
            </div>
            <div className="flex flex-col my-2 p-2">
              <h1 className="text-center font-bold text-xl my-2 text-slate-600">
                Image
              </h1>
              <input
                type="text"
                id="iamge"
                name="image"
                defaultValue={details.image}
                placeholder="image"
                className="w-full rounded-md  md:w-1/2 md:mx-auto bg-slate-300 focus:outline-none px-4 py-3"
              />
            </div>
            <div className="flex flex-col my-2 p-2">
              <h1 className="text-center font-bold text-xl my-2 text-slate-600">
                last date
              </h1>
              <input
                type="date"
                id="date"
                name="date"
                placeholder="date"
                defaultValue={details.date}
                className="w-full rounded-md  md:w-1/2 md:mx-auto bg-slate-300 focus:outline-none px-4 py-3"
              />
            </div>
            <div>
              <div className="flex flex-col my-2 p-2">
                <h1 className="text-center font-bold text-xl my-2 text-slate-600">
                  Marks
                </h1>
                <input
                  type="number"
                  id="marks"
                  name="marks"
                  placeholder="marks"
                  defaultValue={details.marks}
                  className="w-full rounded-md  md:w-1/2 md:mx-auto bg-slate-300 focus:outline-none px-4 py-3"
                />
              </div>
              <div className="flex flex-col my-2 p-2">
                <h1 className="text-center font-bold text-xl my-2 text-slate-600">
                  Level
                </h1>
                <select
                  className="w-full rounded-md  md:w-1/2 md:mx-auto text-white focus:outline-none px-4 py-3 bg-slate-700"
                  name="level"
                  id="level"
                  defaultValue={details.category}
                >
                  <option value="easy">easy</option>
                  <option value="medium">medium</option>
                  <option value="hard">hard</option>
                </select>
              </div>
            </div>
            <div className="  my-2 p-2 flex items-center justify-center">
              <button className="w-1/2   rounded-md  md:w-1/3 md:mx-auto bg-slate-800 text-white font-bold hover:bg-slate-600 px-4 py-3">
                {loading ? "updating..." : "update"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
