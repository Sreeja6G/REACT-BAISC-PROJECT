import { useState } from "react";

function App() {
  const [course, setCourse] = useState("");
  const [courses, setCourses] = useState([]);

  function handleAdd() {
    setCourses([...courses, course]);
    setCourse("");
  }

  function deleteC(courseToDelete) {
    setCourses(courses.filter((c) => c !== courseToDelete));
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
        <div key={course}>
          <h3>{course}</h3>
          <button onClick={() => deleteC(course)}>Delete</button>
          <button onclcik="edit">Edit</button>
        </div>
    
      ))}
    </>
  );
}

export default App;