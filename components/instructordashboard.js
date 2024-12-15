import { useState } from "react";
import ProfileForm from "../components/ProfileForm";
import CourseManager from "../components/CourseManager";
import FeedbackViewer from "../components/FeedbackViewer";
import styles from "../styles/InstructorPage.module.css";

export default function InstructorPage() {
  const [courses, setCourses] = useState([]);
  const [feedback, setFeedback] = useState([
    { courseId: 1, comment: "Great course!", rating: 4.5 },
    { courseId: 2, comment: "Needs improvement in clarity.", rating: 3.8 },
  ]);

  const handleCourseUpdate = (updatedCourses) => {
    setCourses(updatedCourses);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Instructor Dashboard</h1>

      {/* Section: Profile Form */}
      <section className={styles.section}>
        <h2>Add Your Profile Information</h2>
        <ProfileForm />
      </section>

      {/* Section: Course Management */}
      <section className={styles.section}>
        <h2>Manage Your Courses</h2>
        <CourseManager courses={courses} setCourses={handleCourseUpdate} />
      </section>

      {/* Section: View Feedback */}
      <section className={styles.section}>
        <h2>View Course Ratings & Feedback</h2>
        <FeedbackViewer feedback={feedback} />
      </section>
    </div>
  );
}
