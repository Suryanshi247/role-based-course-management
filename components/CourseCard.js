import styles from "../styles/CourseCard.module.css";

export default function CourseCard({ title, description, price, rating, onEnroll }) {
  return (
    <div className={styles.courseCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.details}>
        <span>Price: ${price}</span>
        <span>Rating: {rating} ★</span>
      </div>
      <button onClick={onEnroll}>Enroll Now</button>
    </div>
  );
}
