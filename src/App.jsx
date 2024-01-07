import { Route,Routes } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import RequiresAuth from "./utils/RequiresAuth"

function App() {

  return (
      <div>
        <Routes>
          <Route path="/:fromDate?/:toDate?/:age?/:gender?" element={<RequiresAuth> <Home /> </RequiresAuth>} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
    </div>
  )
}

export default App
