import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
export default function CreateAssignment() {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  //   console.log(user.email);
  const handleAssignmentSubmitData = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);
    const title = formData.get("title");
    const description = formData.get("description");
    const date = formData.get("date");
    const image = formData.get("image");
    const marks = formData.get("marks");
    const category = formData.get("level");
    const assignment = {
      title,
      description,
      date,
      image,
      marks,
      category,
      owner: user.email,
    };
    fetch(
      "https://server-8lmdgp0sx-sakib-hasans-projects.vercel.app/create/assignment",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(assignment),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        // console.log(data);-
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="max-w-6xl mx-auto my-8 py-6 ">
      <h1 className="text-slate-700 font-bold text-center my-6 text-xl md:text-5xl">
        Create A Session
      </h1>
      <form onSubmit={handleAssignmentSubmitData}>
        <div className="max-w-5xl mx-auto ">
          <div className="flex flex-col my-2 p-2">
            <h1 className="text-center font-bold text-xl my-2 text-slate-600">
              title
            </h1>
            <input
              required
              type="text"
              id="title"
              name="title"
              placeholder="title"
              className="w-full rounded-md  md:w-1/2 md:mx-auto bg-slate-300 focus:outline-none px-4 py-3"
            />
          </div>
          <div className="flex flex-col my-2 p-2">
            <h1 className="text-center font-bold text-xl my-2 text-slate-600">
              description
            </h1>
            <textarea
              type="text"
              required
              id="description"
              name="description"
              placeholder="description"
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
              required
              id="date"
              name="date"
              placeholder="date"
              className="w-full rounded-md  md:w-1/2 md:mx-auto bg-slate-300 focus:outline-none px-4 py-3"
            />
          </div>
          <div>
            <div className="flex flex-col my-2 p-2">
              <h1 className="text-center font-bold text-xl my-2 text-slate-600">
                Marks
              </h1>
              <input
                required
                type="number"
                id="marks"
                name="marks"
                placeholder="marks"
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
              >
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
              </select>
            </div>
          </div>
          <div className="  my-2 p-2 flex items-center justify-center">
            <button className="w-1/2   rounded-md  md:w-1/3 md:mx-auto bg-slate-800 text-white font-bold hover:bg-slate-600 px-4 py-3">
              {loading ? "creating..." : "create"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
