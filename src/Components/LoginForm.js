import React from "react";

export default function LoginForm() {
  const state = authStore();

  return (
    <form>
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
