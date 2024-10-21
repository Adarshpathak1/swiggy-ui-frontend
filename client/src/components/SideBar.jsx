import React from "react";

const SideBar = ({ toggle }) => {
  function hideSideMenu() {
    setToggle(false);
  }
  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500 z-30"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          className="w-[500px] flex items-center justify-center flex-col gap-5 bg-white h-full absolute duration-[650ms] z-100"
          onClick={(e) => e.stopPropagation()}
          style={{
            left: toggle ? "0%" : "-650%",
          }}
              >
                  <input className="h-[50px] text-[1.15rem] p-[0_20px] font-bold border-[1px] shadow-md" type="text" placeholder="Search for area, street name.." />
                  <div className="Gps border-[1px] shadow-md  text-[1.15rem] p-[0_20px] font-bold text-gray-800">
                      <h4>Get current location</h4>
                      <p>using GPS</p>
                  </div>
                  <div className="recent">
                      <p className="recent-searches">Recent Searches</p>
                      <h3 className="place">Dadar</h3>
                      <p className="current-place">Mumbai, Maharashtra,India</p>
                  </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
