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
import Loader from "../components/Loader";

function App() {
  return (
    <div className="Home">
        <Navbar page='home' ></Navbar>
        <BrowserView>
            <div className='margin-top-120'></div>
            <img src='tab_banner.png' className='mobile-banner' alt='Langing page banner'></img>
        </BrowserView>
        <MobileOnlyView>
            <img src='tab_banner.png' className='mobile-banner' alt='Langing page banner'></img>
        </MobileOnlyView>
        <TabletView>
            <img src='tab_banner.png' className='mobile-banner' alt='Langing page banner'></img>
        </TabletView>
        <Loader />
    </div>
  );
}

export default App;
