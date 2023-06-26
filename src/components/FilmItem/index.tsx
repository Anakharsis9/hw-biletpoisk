import { Button } from "../Base/Button";
import { CloseIcon, ImageIcon } from "../Icons";
import Image from "next/image";
import style from "./FilmItem.module.scss";

export const FilmItem = ({}) => {
  return (
    <div className={style.filmItemWrapper}>
      <div className={style.filmInfo}>
        <div className={style.filmPosterWrapper}>
          <Image
            src={"/Rectangle 55.jpg"}
            alt={"poster"}
            width={100}
            height={120}
            placeholder="blur"
            blurDataURL="/imagePlaceholder.jpg"
          />
        </div>
        <div className={style.filmHeader}>
          <h2 className={style.filmName}>Властелин колец: Братство кольца</h2>
          <span className={style.filmGenre}>Фэнтези</span>
        </div>
      </div>
      <div className={style.controls}>
        <div className={style.ticketControls}>
          <Button variant={"filled"} disabled={true} iconName="minus" />
          <span className={style.ticketCount}>0</span>
          <Button variant={"filled"} disabled={false} iconName="plus" />
        </div>

        <Button variant={"none"}>
          <CloseIcon width={20} height={20} />
        </Button>
      </div>
    </div>
  );
};
