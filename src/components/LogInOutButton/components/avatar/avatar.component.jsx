import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./avatar.module.scss";
import Dropdown from "../dropdown/dropdown.component";
import { firstLetters } from "./avatar_functions";

export default function Avatar() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [toggle, setTooggle] = useState(false);
  const [userInformation, setUserInformation] = useState(null);
  useEffect(() => {
    setUserInformation({
      displayName: currentUser.displayName,
      avatarLetters: firstLetters(currentUser.displayName),
      email: currentUser.email,
    });
    currentUser && console.log(firstLetters(currentUser.displayName));
  }, [currentUser]);
  useEffect(() => {
    console.log(toggle);
  }, [toggle]);
  return (
    <>
      <div
        className={styles.avatar}
        onMouseEnter={() => setTooggle(true)}
        onTouchStart={() => setTooggle(true)}
      >
        <Link to="/user">
          <div>{userInformation && userInformation.avatarLetters}</div>
        </Link>
      </div>
      <Dropdown
        onMouseLeave={() => setTooggle(false)}
        toggle={toggle ? 0 : 1}
      />
    </>
  );
}
