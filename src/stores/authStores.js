import React from "react";
import LoginForm from "../Components/LoginForm";

const authStore = create((set) => ({
  loginFomr: {
    email: "",
    password: "",
  },

  updateLoginForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        loginForm: {
          ...LoginForm,
          [name]: value,
        },
      };
    });

    set({});
  },
}));
