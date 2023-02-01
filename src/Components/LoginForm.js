import React from "react";
import {useNavigate} from "react-router-dom";
export default function LoginForm() {
  const state = authStore();
const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    await store.login();

    // NAvigate
    navigate("/")
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        onChange={store.updateLoginForm}
        value={Store.loginForm.email}
        type="email"
        name="email"
      />
      <input
        onChange={store.updateLoginForm}
        type={Store.loginForm.password}
        value="password"
        name="password"
      />
      <button type="Submit">Login</button>
    </form>
  );
}
