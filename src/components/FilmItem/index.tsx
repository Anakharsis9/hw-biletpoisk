import { Button } from "../Base/Button";
import { MinusIcon } from "../Icons";

export const FilmItem = ({}) => {
  return (
    <div>
      <Button
        variant={"filled"}
        disabled={false}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        <MinusIcon color={"white"}/>
      </Button>
    </div>
  );
};
