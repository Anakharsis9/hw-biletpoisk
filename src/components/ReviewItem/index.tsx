import style from "./Review.module.scss";
import Image from "next/image";

export type Review = {
  id: string;
  name: string;
  rating: number;
  text: string;
};

interface ReviewProps {
  review: Review;
}

export const ReviewItem = ({ review }: ReviewProps) => {
  return (
    <div className={style.reviewWrapper}>
      <Image
        className={style.reviewerPhoto}
        src={"/imagePlaceholder.jpg"}
        alt={review.id}
        width={100}
        height={100}
      />
      <div className={style.info}>
        <div className={style.header}>
          <h4 className={style.name}>{review.name}</h4>
          <div className={style.ratingWrapper}>
            <span className={style.ratingTitle}>Оценка:</span>
            <span className={style.ratingValue}>{review.rating}</span>
          </div>
        </div>
        <p className={style.reviewText}>{review.text}</p>
      </div>
    </div>
  );
};
