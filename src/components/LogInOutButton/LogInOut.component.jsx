import React from "react";
import { useSelector } from "react-redux";




export default function LogInOut() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    setUser(currentUser)
  }, [currentUser]);

  return (<div>
    {user ? user.email:""}
  </div>)
}
