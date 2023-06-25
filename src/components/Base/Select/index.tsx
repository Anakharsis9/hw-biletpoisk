import { useState } from "react";

interface IProps {
  label: string;
  options: string[];
  onChange: () => {};
}

export const Select = ({ label, options, onChange }): IProps => {
  const [currentValue, setCurrentValue] = useState("");
  return <select name="" id=""></select>;
};
