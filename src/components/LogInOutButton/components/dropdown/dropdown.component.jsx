import React from "react";
import styles from "./dropdown.module.scss";

export default function Dropdown(props) {
  return (
    <div className={`${styles.dropdown} ${props.toggle ? styles.on : ""}`}{...props}>
      <span>Deconectare</span>
      <span>Dashboard</span>
    </div>
  );
}
