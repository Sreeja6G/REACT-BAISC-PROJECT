import { useState } from "react";

function App() {
  const [course, setCourse] = useState("");
  const [courses, setCourses] = useState([]);

  function handleAdd() {
    if (course) {
      setCourses([...courses, course]);
      setCourse("");
    }
  }

  function handleDelete(index) {
    const newCourses = courses.filter((_, i) => i !== index);
    setCourses(newCourses);
  }

  function edit(index) {
    const newCourse = prompt("Enter new course", courses[index]);

    if (newCourse) {
      const newCourses = [...courses];
      newCourses[index] = newCourse;
      setCourses(newCourses);
    }
  }

  return (
    <div>
      <h1>Course List</h1>

      <input
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        placeholder="Enter course"
      />

      <button onClick={handleAdd}>Add</button>

      {courses.map((course, index) => (
        <div key={index}>
          <span>{course}</span>

          <button onClick={() => edit(index)}>
            Edit
          </button>

          <button onClick={() => handleDelete(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;