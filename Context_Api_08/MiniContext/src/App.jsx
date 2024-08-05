import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  
  return (
    <UserContextProvider>
      <div className="text-3xl ">Hello Guys this our my react series</div>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
