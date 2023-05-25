import { Route,Routes } from "react-router-dom";
import "./assets/css/App.css";
import Header from "./Header";
import Nav from "./Nav";
import Exp from "./Exp";
import Hobbies from "./Hobbies";
function App() {
  return (
    <div className="App">
       {/* <Routes>
        <Route path="/" element={<Header/>}></Route>
        <Route path="/nav" element={<Nav/>}></Route>
        <Route path="/linkedin" element={<BookingPage />}> </Route>
          <Route path="/github" element={<Login />}> </Route>
          <Route path="/confirmation" element={<Confirmation />}> </Route>
        
        </Routes> */}


      <Routes>

    <Route path="/" element={<Header/>}></Route>
      <Route path="/nav" element={<Nav />} />
      <Route path="/exp" element={<Exp />} />
      <Route path="/hob" element={<Hobbies />} />

    </Routes>
    </div>
  );
}

export default App;
