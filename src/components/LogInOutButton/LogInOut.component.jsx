import React from "react";
import Forms from "../text-input/inputs.component";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../pages/login-out/userSlice";
import styles from "./loginout.module.scss";
import firebase from "../../app/firebase_functions";

function Button(props) {
  return <input className={styles.input} type="button" value={props.value} />;
}

export default function LogInOut() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [user, setUser] = React.useState(null);
  const [errorState, setErrorState] = React.useState({
    code: null,
    message: null,
  });
  const dispatch = useDispatch();
  React.useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(
        function () {
          console.log("Signed Out");
          dispatch(logOut());
        },
        function (error) {
          setErrorState({code: error.code, message:error.message})
        }
      );
  };

  return (
    <div>
      {user ? (
        <Forms.Button value="DECONECTARE" onClick={handleLogout} />
      ) : (
        <Link to="/login">
          <Forms.Button value="CONECTARE" />
        </Link>
      )}
    </div>
  );
}
