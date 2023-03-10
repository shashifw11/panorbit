
import {Routes , Route} from "react-router-dom" ; 
import UsersAccount from "./components/UsersAccount/UsersAccount";
import "./App.css"
import Profilehomepage from "./components/homepage/profilehomepage";
import Gallery from "./components/catogery/gallery";
import Posts from "./components/catogery/posts";
import Todo from "./components/catogery/todo";

function App() {
  return (
    <div className="App"> 
      
      <Routes> 
        <Route path = "/" element = {<UsersAccount/>}/>
        <Route path = "/:id" element = {<Profilehomepage/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
