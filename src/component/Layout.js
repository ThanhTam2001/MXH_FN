import Header from "./Header";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Compole from "./User/Compole";
import Admin from "./Admin/Admin";
import Composeuser from "./Admin/Composeuser";
import Group from "./Group/Getgroup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  const Account = useSelector((state) => state.accountThanh.Account);
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}></Route>

        <Route path="/:id" element={<Compole />} />

        <Route path="admin" element={<Admin />}>
          <Route path="alluser" element={<Composeuser />} />
        </Route>
        <Route path="group" element={<Group />}></Route>
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Layout;
