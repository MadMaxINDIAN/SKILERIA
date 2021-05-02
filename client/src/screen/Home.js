import Navbar from "../components/Navbar";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
    MobileOnlyView,
    isMobileOnly,
    TabletView
  } from "react-device-detect";

function App() {
  return (
    <div className="Home">
        <Navbar page='home' ></Navbar>
        <BrowserView>
            <div className='margin-top-120'></div>
        </BrowserView>
        <MobileOnlyView>
            <img src='tab_banner.png' className='mobile-banner' alt='Langing page banner'></img>
        </MobileOnlyView>
        <TabletView>
            <img src='tab_banner.png' className='mobile-banner' alt='Langing page banner'></img>
        </TabletView>
    </div>
  );
}

export default App;
