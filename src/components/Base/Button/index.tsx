import vars from "@/style/variables.module.scss";

import { MinusIcon, PlusIcon } from "@/components/Icons";
import style from "./Button.module.scss";
interface ButtonProps {
  variant: "filled" | "outlined" | "none";
  iconName?: "minus" | "plus";
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}
export const Button = ({
  variant = "filled",
  iconName,
  disabled = false,
  children,
  onClick
}: ButtonProps) => {
  return (
    <button
      className={style.button}
      data-variant={variant}
      disabled={disabled}
      onClick={onClick}
      style={iconName && { padding: "4px", borderRadius: "4px" }}
    >
      {children}
      {iconName === "minus" && (
        <MinusIcon color={vars.white} width={12} height={12} />
      )}
      {iconName === "plus" && (
        <PlusIcon color={vars.white} width={12} height={12} />
      )}
    </button>
  );
};
