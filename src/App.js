import React from "react";
import "./App.css";
//import Login from "./container/Login";
// import Navbar from "./container/Navbar";
// import SideNavBar from "./container/SideNavbar";
import Routers from "./helpers/Routers";

export default function App() {
  return (
    <div className="app">
      <Routers />
      {/* <Login /> */}
      {/* <Navbar />
      <SideNavBar /> */}
    </div>
  );
}

// //import "./App.css";
// import Login from "./container/Login";
// // import Avatar from "./components/Avatar";
// // import CustomeButton from "./components/Button";
// // import CustomModal from "./components/CustomModal";
// // import Navbar from "./container/Navbar";
// // import PropTypes from "prop-types";
// // import Pagination from "./components/Pagination";

// function App() {
//   // const handleClose = () => {
//   //   setShowModal((prev) => !prev);
//   // };
//   return (
//     <div className="App">
//       <Login />
//       {/* <Navbar />
//       <Avatar name="Sanya Arora" color="white" size="sm" />
//       <CustomeButton />
//       <CustomModal open={showModal} onClose={handleClose}>
//         abc
//       </CustomModal>
//       <Pagination /> */}
//     </div>
//   );
// }

// // App.propTypes = {
// //   showModal: PropTypes.bool.isRequired,
// //   setShowModal: PropTypes.func.isRequired,
// // };

// export default App;
