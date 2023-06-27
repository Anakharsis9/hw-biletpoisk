"use client";

import { ArrowIcon } from "@/components/Icons";
import style from "./Accordion.module.scss";
import vars from "@/style/variables.module.scss";
import { useState } from "react";

export const Accordion = ({ title, text }: { title: string; text: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={style.accordionWrapper} data-is-active={isOpen}>
      <div className={style.title}>
        <h3>{title}</h3>
        <div className={style.arrow} onClick={() => setIsOpen(prev => !prev)}>
          <ArrowIcon color={vars.primaryGray} />
        </div>
      </div>
      {isOpen && <div className={style.text}>{text}</div>}
    </div>
  );
};
