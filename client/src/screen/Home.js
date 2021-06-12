import Navbar from "../components/Navbar";
import {
    BrowserView,
  } from "react-device-detect";

function App() {
  return (
    <div className="Home">
        <Navbar page='home' ></Navbar>
        <BrowserView>
            <div className='margin-top-120'></div>
        </BrowserView>
    </div>
  );
}

export default App;
