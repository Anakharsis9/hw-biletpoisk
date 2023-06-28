import { ArrowIcon } from "@/components/Icons";
import styles from "./Select.module.scss";
import vars from "@/style/variables.module.scss";

import { useState, useRef, useEffect, MouseEventHandler } from "react";
import { createPortal } from "react-dom";

interface Option {
  title: string;
  value: string;
}

interface OptionProps {
  option: Option;
  isSelected: boolean;
  onClick: (value: Option["value"]) => void;
}

const Option = ({ option, isSelected, onClick }: OptionProps) => {
  const { title, value } = option;

  const handleClick =
    (clickedValue: Option["value"]): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick?.(clickedValue);
    };

  const optionRef = useRef<HTMLLIElement>(null);
  useEffect(() => {
    const option = optionRef.current;
    if (!option) return;

    const handleEnterPress = (event: KeyboardEvent) => {
      if (document.activeElement === option && event.key === "Enter") {
        onClick(value);
      }
    };

    option.addEventListener("keydown", handleEnterPress);

    return () => {
      option.removeEventListener("keydown", handleEnterPress);
    };
  }, [value, onClick]);
  return (
    <li
      className={styles.option}
      ref={optionRef}
      value={value}
      onClick={handleClick(value)}
      data-is-selected={isSelected}
      tabIndex={0}
    >
      {title}
    </li>
  );
};

interface SelectProps {
  selected: Option | null;
  options: Option[];
  placeholder?: string;
  onChange?: (selected: Option["value"]) => void;
  onClose?: () => void;
}

export const Select = ({
  selected,
  options,
  placeholder,
  onChange,
  onClose
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && onClose?.();
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isOpen, onClose]);

  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const placeholderEl = placeholderRef.current;
    if (!placeholderEl) return;

    const handleClick = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        setIsOpen(prev => !prev);
      }
    };

    placeholderEl.addEventListener("keydown", handleClick);

    return () => {
      placeholderEl.removeEventListener("keydown", handleClick);
    };
  }, []);

  const handleOptionClick = (value: Option["value"]) => {
    setIsOpen(false);
    onChange?.(value);
  };

  const [coords, setCoords] = useState({});
  const handlePlaceholderClick: MouseEventHandler<HTMLDivElement> = () => {
    const placeholderEl = placeholderRef.current;
    if (!placeholderEl) return;

    const rect = placeholderEl.getBoundingClientRect();

    setCoords({
      top: rect.bottom + window.scrollY + 1,
      left: rect.left,
      width: rect.width
    });
    setIsOpen(prev => !prev);
  };


  return (
    <div className={styles.selectWrapper} ref={rootRef}>
      <div
        className={styles.placeholder}
        ref={placeholderRef}
        data-selected={!!selected?.value}
        data-is-active={isOpen}
        onClick={handlePlaceholderClick}
        role="button"
        tabIndex={0}
      >
        {selected?.title || placeholder}
        <div className={styles.arrow}>
          <ArrowIcon color={vars.textPlaceholder} width={20} height={20} />
        </div>
      </div>
      {isOpen &&
        createPortal(
          <ul className={styles.optionsList} style={coords}>
            {options.map(option => (
              <Option
                key={option.value}
                isSelected={selected?.value === option.value}
                option={option}
                onClick={handleOptionClick}
              />
            ))}
          </ul>,
          document.body
        )}
    </div>
  );
};
