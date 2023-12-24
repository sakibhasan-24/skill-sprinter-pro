import { useLoaderData, useParams } from "react-router-dom";
import Assignment from "./Assignment";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Assignments() {
  const loadAssignments = useLoaderData();

  //   const { category } = useParams();
  //   console.log(category);
  const [levelValue, setLevelValue] = useState("");
  const [assignments, setAssignments] = useState(loadAssignments);

  const [getOnlyDataCount, setGetOnlyDataCount] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [postPerPage, setPostPerPage] = useState(3);
  //   console.log(currentPage, postPerPage);
  // get only total Data COunt
  useEffect(() => {
    const loadData = async () => {
      await fetch(
        `http://localhost:5000/get/assignments?category=${levelValue}&page=${currentPage}&size=${postPerPage}`,
        {
          credentials: "include",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setAssignments(data);
        });
    };
    loadData();
  }, [levelValue, currentPage, postPerPage]);
  const url = `http://localhost:5000/get/assignments?category=${levelValue}`;
  //   console.log(url);
  //   console.log("page", currentPage);
  useEffect(() => {
    const loadData = async () => {
      await fetch(url, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          setGetOnlyDataCount(data);
        });
    };
    loadData();
  }, [url]);
  //   pagination
  const totalPage = Math.ceil(getOnlyDataCount.length / postPerPage);

  console.log("t", totalPage);
  const pageList = [...Array(totalPage).keys()];
  //   console.log(pageList);
  const handleCurrentPageChange = (e) => {
    setPostPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };
  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  console.log("le", getOnlyDataCount.length);

  const deleteAssignment = (id) => {
    Swal.fire({
      title: "Are you sure Want to Delete?",
      text: "Once deleted, you will not be able to recover this Assignment!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/assignment/${id}`, {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);

            const remaining = assignments.filter(
              (assignment) => assignment._id !== id
            );
            setAssignments(remaining);
          });
      }
    });
  };
  //   console.log(assignments);
  //   console.log(level.get("level"));
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-slate-500">
        Assignments
      </h1>
      <form>
        <div className="flex flex-col my-2 p-2">
          <h1 className="text-center font-bold text-xl my-2 text-slate-600">
            Level
          </h1>
          <select
            className="w-full rounded-md  md:w-1/2 md:mx-auto text-white focus:outline-none px-4 py-3 bg-slate-700"
            name="level"
            id="level"
            value={levelValue}
            onChange={(e) => setLevelValue(e.target.value)}
          >
            <option value="">All</option>
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
      </form>
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-3">
        {assignments.map((assignment) => (
          <Assignment
            key={assignment._id}
            assignment={assignment}
            deleteAssignment={deleteAssignment}
          />
        ))}
      </div>
      {/* paginations */}
      <div className="flex items-center justify-center gap-2">
        {pageList.map((btn) => (
          <button
            style={{
              backgroundColor: currentPage === btn ? "red" : "black",
            }}
            onClick={() => handleCurrentPage(btn)}
            className="bg-slate-900 text-white p-2 rounded-lg ml-4"
            key={btn}
          >
            {btn + 1}
          </button>
        ))}
        <select
          name=""
          id=""
          value={postPerPage}
          onChange={handleCurrentPageChange}
          className="ml-6"
        >
          <option className="px-2 py-1 bg-slate-800 " value="1">
            1
          </option>
          <option className="px-2 py-1 bg-slate-800 " value="2">
            2
          </option>
          <option className="px-2 py-1 bg-slate-800 " value="3">
            3
          </option>
        </select>
      </div>
    </main>
  );
}
