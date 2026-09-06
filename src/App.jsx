import { useState } from "react";

function App() {
  const [course, setCourse] = useState("");
  const [courses, setCourses] = useState([]);

  function handleAdd() {
    setCourses([...courses, course]);
    setCourse("");
  }

  return (
    <>
      <h1>Course Manager</h1>

      <input
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        placeholder="Enter course"
      />

      <button onClick={handleAdd}>Add</button>

      <h2>My Courses</h2>

      {courses.map((course) => (
        <h3>{course}</h3>
      ))}
    </>
  );
}

export default App;