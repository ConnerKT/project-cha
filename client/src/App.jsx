import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import ChatRoom from "./components/ChatRoom/ChatRoom.jsx";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path={'/chat'} element={<ChatRoom/>}></Route>
            <Route path={'/'} element={<LandingPage/>}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
