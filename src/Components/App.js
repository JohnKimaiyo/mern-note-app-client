import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes ,Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li>
          <Link to ="/">Home</Link>
        </li>
        <li>
          <Link to ="/login">Login</Link>
        </li>
        <li>
          <Link to ="/signup">Signup</Link>
        </li>
      </ul>
      <Routes>
<Route index element={<NotesPage}/>
<Route path="/login" element={<LoginPage/>}/>
<Route path="/signup" element={<SignupPage/>}/>
      </Routes>
        <NotesPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
