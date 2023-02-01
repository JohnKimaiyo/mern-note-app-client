import axios from "axios";
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

    login: async (e) => {
      e.preventDefault();

      const { loginForm } = authStore.getState();

      const res = axios.post("/login", loginForm, { withCredentials: true });
    };

    set({ loggedIn: true });
    console.log(res);

    checkAuth:async() =>{
      await axios.get('/check-auth',{withCredentials:true});
      set({loggedIn:true});
    } catch(err){
      set({loggedIn:false})
    }
  },

  signup: async () =>{
    const {signUpForm} = authStore.getState();

    const res = await axios.post('/signup',signupForm,{withCredentials:true})
    console.log(res);

    logout:async axios () =>{
      axios.get('/logout',{withCredentials:true})
      set({loggedIn:false});
    }
  }
}));

export default authStore;
