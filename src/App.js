
// import Header from "./components/Header";

import Home from "./pages/Home";
import Dashboard from './pages/Dashboard'
import {Routes, Route} from "react-router-dom"
function App() {
  return (
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='Dashboard' element={<Dashboard />} />
       </Routes>
  );
}

export default App;
