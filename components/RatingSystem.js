import { useState } from "react";
import styles from "../styles/RatingSystem.module.css";

export default function RatingSystem({ onSubmitRating }) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitRating({ rating, review });
    setRating(0);
    setReview("");
  };

  return (
    <form className={styles.ratingForm} onSubmit={handleSubmit}>
      <label>
        Rating:
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          <option value="0">Select</option>
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>
              {star} ★
            </option>
          ))}
        </select>
      </label>
      <label>
        Review:
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here..."
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
