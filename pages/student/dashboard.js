import { useState } from "react";
import CourseCard from "../../components/CourseCard";
import RatingSystem from "../../components/RatingSystem";
import ProtectedRoute from "../../components/ProtectedRoute";
import styles from "../../styles/StudentDashboard.module.css";

const mockCourses = [
  { id: 1, title: "React Basics", description: "Learn the fundamentals of React.", price: 49, rating: 4.5 },
  { id: 2, title: "Advanced Networking", description: "Deep dive into networking protocols.", price: 69, rating: 4.8 },
  { id: 3, title: "Python for Data Science", description: "Master Python and data analysis techniques.", price: 59, rating: 4.7 },
  { id: 4, title: "UI/UX Design Principles", description: "Design beautiful and user-friendly interfaces.", price: 39, rating: 4.3 },
  { id: 5, title: "Machine Learning with TensorFlow", description: "Build ML models using TensorFlow.", price: 89, rating: 4.9 },
  { id: 6, title: "Cybersecurity Essentials", description: "Understand the basics of cybersecurity.", price: 75, rating: 4.6 },
  { id: 7, title: "Web Development Bootcamp", description: "Full-stack web development from scratch.", price: 99, rating: 4.8 },
  { id: 8, title: "AWS Cloud Practitioner", description: "Get started with AWS cloud services.", price: 65, rating: 4.5 },
];

export default function StudentDashboard() {
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [feedback, setFeedback] = useState([]);

  const handleEnroll = (course) => {
    if (purchasedCourses.some((c) => c.id === course.id)) {
      alert("You are already enrolled in this course.");
    } else {
      setPurchasedCourses([...purchasedCourses, course]);
      alert(`You have successfully enrolled in ${course.title}`);
    }
  };

  const handleRatingSubmit = (newFeedback) => {
    setFeedback([...feedback, newFeedback]);
    alert("Thank you for your feedback!");
  };

  return (
    <ProtectedRoute role="student">
      <div className={styles.dashboard}>
        <h1>Welcome to the Student Dashboard</h1>

        {/* Section: Available Courses */}
        <h2>Available Courses</h2>
        <div className={styles.courseGrid}>
          {mockCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              price={course.price}
              rating={course.rating}
              onEnroll={() => handleEnroll(course)}
            />
          ))}
        </div>

        {/* Section: Feedback */}
        <div className={styles.feedbackSection}>
          <h2>Submit Your Feedback</h2>
          <RatingSystem onSubmitRating={handleRatingSubmit} />
        </div>

        {/* Section: Enrolled Courses */}
        <div className={styles.enrolledCourses}>
          <h2>Your Enrolled Courses</h2>
          {purchasedCourses.length > 0 ? (
            purchasedCourses.map((course) => (
              <div key={course.id} className={styles.enrolledCourse}>
                <strong>{course.title}</strong>
                <p>{course.description}</p>
              </div>
            ))
          ) : (
            <p>You have not enrolled in any courses yet.</p>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
