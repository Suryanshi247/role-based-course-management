// components/AdminDashboard.js
import React, { useState } from "react";
import styles from "../styles/AdminDashboard.module.css";

const AdminDashboard = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: "React for Beginners", rating: 4.5 },
    { id: 2, title: "Advanced JavaScript", rating: 4.8 },
  ]);

  const [students, setStudents] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);

  const [instructors, setInstructors] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ]);

  const [newCourse, setNewCourse] = useState("");
  const [newStudent, setNewStudent] = useState("");
  const [newInstructor, setNewInstructor] = useState("");

  const addCourse = () => {
    if (newCourse.trim()) {
      setCourses([...courses, { id: Date.now(), title: newCourse, rating: 0 }]);
      setNewCourse("");
    }
  };

  const removeCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const addStudent = () => {
    if (newStudent.trim()) {
      setStudents([...students, { id: Date.now(), name: newStudent }]);
      setNewStudent("");
    }
  };

  const removeStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const addInstructor = () => {
    if (newInstructor.trim()) {
      setInstructors([
        ...instructors,
        { id: Date.now(), name: newInstructor },
      ]);
      setNewInstructor("");
    }
  };

  const removeInstructor = (id) => {
    setInstructors(instructors.filter((instructor) => instructor.id !== id));
  };

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Admin Dashboard</h1>

      {/* Key Metrics */}
      <div className={styles.metrics}>
        <div className={styles.metricCard}>
          <h3>Total Courses</h3>
          <p>{courses.length}</p>
        </div>
        <div className={styles.metricCard}>
          <h3>Total Students</h3>
          <p>{students.length}</p>
        </div>
        <div className={styles.metricCard}>
          <h3>Total Instructors</h3>
          <p>{instructors.length}</p>
        </div>
      </div>

      {/* Manage Courses */}
      <div className={styles.section}>
        <h2>Manage Courses</h2>
        <input
          type="text"
          placeholder="Add new course"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
        />
        <button onClick={addCourse} className={styles.addButton}>
          Add Course
        </button>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              {course.title} (Rating: {course.rating})
              <button
                onClick={() => removeCourse(course.id)}
                className={styles.deleteButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Manage Students */}
      <div className={styles.section}>
        <h2>Manage Students</h2>
        <input
          type="text"
          placeholder="Add new student"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
        />
        <button onClick={addStudent} className={styles.addButton}>
          Add Student
        </button>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name}
              <button
                onClick={() => removeStudent(student.id)}
                className={styles.deleteButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Manage Instructors */}
      <div className={styles.section}>
        <h2>Manage Instructors</h2>
        <input
          type="text"
          placeholder="Add new instructor"
          value={newInstructor}
          onChange={(e) => setNewInstructor(e.target.value)}
        />
        <button onClick={addInstructor} className={styles.addButton}>
          Add Instructor
        </button>
        <ul>
          {instructors.map((instructor) => (
            <li key={instructor.id}>
              {instructor.name}
              <button
                onClick={() => removeInstructor(instructor.id)}
                className={styles.deleteButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
