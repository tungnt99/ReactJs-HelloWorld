import { useState } from "react";
import ListTodo from "./TodoApp/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function TodoList() {
  const storageJobs = JSON.parse(localStorage.getItem("jobs"));
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(storageJobs ?? []);
  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      // Save to local storage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
    setJob("");
  };
  return (
    <>
      <div className="todo-list">
        <input value={job} onChange={(e) => setJob(e.target.value)} />
        <button onClick={handleSubmit}>Add</button>

        <ul>
          {console.log(jobs)}
          {jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      </div>
      <ListTodo />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}
