// import React, { useEffect, useState } from "react";
// import Navbar from "./UI/Navbar/Navbar";
// import { Outlet, useLocation } from "react-router-dom";

// const Layout = () => {
//   let [historyIndex, setHistoryIndex] = useState(window.history.state?.idx);
//   let location = useLocation();

//   // Expose the underlying history index in the UI for debugging
//   useEffect(() => {
//     setHistoryIndex(window.history.state?.idx);
//   }, [location]);

//   // Give us meaningful document titles for popping back/forward more than 1 entry
//   useEffect(() => {
//     document.title = location.pathname;
//   }, [location]);
//   console.log(historyIndex);

//   return (
//     <>
//       <Navbar />
//       <Outlet />
//     </>
//   );
// };

// export default Layout;
