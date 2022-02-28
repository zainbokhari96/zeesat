import "./App.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

import Login from "./Views/login";

import { Routes, Route, Navigate } from "react-router-dom";

import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const vertical = "top";
  const horizontal = "right";
  // const open = useSelector((state) => state.snackbarReducer.status);
  // const message = useSelector((state) => state.snackbarReducer.message);
  // const error = useSelector((state) => state.snackbarReducer.error);
  // const type = useSelector((state) => state.snackbarReducer.type);
  // const Alert = forwardRef(function Alert(props, ref) {
  //   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  // });
  // function Transition(props) {
  //   return <Slide {...props} direction="left" />;
  // }

  // const closeSnackbar = () => {
  //   const snackPayload = {
  //     status: false,
  //     type: type,
  //     message: "",
  //     error: error,
  //   };
  //   dispatch({ type: "CLEAR_SNACKBAR_REQUEST", snackPayload });
  // };

  function RequireAdminAuth({ children, redirectTo }) {
    let isAuthenticated = localStorage.getItem("adminToken");
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  }

  return (
    <>
      <Routes>
        {/* ADMIN ROUTES */}
        <Route path="/" element={<Login />} />
      </Routes>

      {/* GLOBAL SNACKBAR */}
      {/* <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={5000}
        onClose={closeSnackbar}
        TransitionComponent={Transition}
      >
        <Alert onClose={closeSnackbar} severity={type} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar> */}
    </>
  );
}

export default App;
