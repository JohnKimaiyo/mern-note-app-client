import React from 'react'

export default function SignUpForm() {
    const store = authStore();
    const navigate = useNavigate()
    const handleSignup = (e) =>{
        e.preventDefault();
        store.signUp();
        navigate("/login")
    }
  return (
    <form onSubmit={store.signup}>
      <input
        onChange={store.updateLoginForm}
        value={Store.SignupForm.email}
        type="email"
        name="email"
      />
      <input
        onChange={store.updateSignupForm}
        type={Store.SignupForm.password}
        value="password"
        name="password"
      />
      <button type="Submit">SignUp</button>
    </form>
  );
  )
}
