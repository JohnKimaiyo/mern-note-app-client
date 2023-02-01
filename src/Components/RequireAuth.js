import React, { useEffect } from "react";
import { Navigation } from "react-router-dom";
export default function RequireAuth(props) {
  const store = authStore();

  useEffect(() => {
    if ((store.loggedIn = null)) {
      store.CheckAuth();
    }
  }, []);
  if (store.loggedIn === null) {
    return <div>Loading</div>;
  }

  if (!store.loggedIn === false) {
    return <NAvigate to="/login" />;
  }
  return <div>{props.children}</div>;
}
