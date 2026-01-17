import axios from "axios";
import { useState } from "react";

export default function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createCourse = async () => {
    await axios.post(
      "http://localhost:5000/api/courses",
      { title, description },
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );
    alert("Course Created");
  };

  return (
    <>
      <h2>Create Course</h2>
      <input
        placeholder="Course Title"
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Course Description"
        onChange={e => setDescription(e.target.value)}
      />
      <br />
      <button onClick={createCourse}>Create</button>
    </>
  );
}
