import style from "./Button.module.scss";
interface ButtonProps {
  variant: "filled" | "outlined";
  disabled: boolean;
  children?: React.ReactNode;
  onClick: () => void;
}
export const Button = ({
  variant = "filled",
  disabled = false,
  children,
  onClick
}: ButtonProps) => {
  return (
    <button className={style.button} data-variant={variant} disabled={disabled}>
      {children}
    </button>
  );
};
