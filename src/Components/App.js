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
      </ul>
      <Routes>
<Route index element={<NotesPage}/>
<Route path="/login" element={<LoginPage/>}/>

      </Routes>
        <NotesPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
