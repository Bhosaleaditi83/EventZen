import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import OtpVerification from "../pages/OtpVerification";
import ResetPassword from "../pages/ResetPassword";
import UserMenuMobile from "../pages/UserMenuMobile";
import Dashboard from "../layouts/Dashboard";
import Profile from "../pages/Profile";
import MyBookings from "../pages/MyBookings";
import Address from "../pages/Address";
import EventsCategoryPage from "../pages/EventsCategoryPage";
import SubCategoryPage from "../pages/SubCategoryPage";
import EventAdmin from "../pages/EventAdmin";
import AdminPermision from "../layouts/AdminPermision";
import UploadEvent from "../pages/UploadEvent";
import EventListPage from "../pages/EventListPage";


const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "search",
                element : <SearchPage/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "register",
                element : <Register/>
            },
            {
                path : "forgot-password",
                element : <ForgotPassword/>
            },
            {
                path : "verification-otp",
                element : <OtpVerification/>
            },

            {
                path : "reset-password",
                element : <ResetPassword/>
            },

            {
                path : "user",
                element : <UserMenuMobile/>
            },

            {
                path : "dashboard",
                element : <Dashboard/>,
                children : [
                    {
                        path : "profile",
                        element: <Profile/>
                    },
                    {
                        path : "mybookings",
                        element : <MyBookings/>
                    },
                    {
                        path : "address",
                        element : <Address/>
                    },
                    {
                        path: "eventscategory",
                        element : <AdminPermision><EventsCategoryPage/></AdminPermision>
                    },
                    {
                        path: "subcategory",
                        element : <AdminPermision><SubCategoryPage/></AdminPermision>
                    },
                    {
                        path: "createevents",
                        element : <AdminPermision><UploadEvent/></AdminPermision>
                    },
                    {
                        path: "events",
                        element : <AdminPermision><EventAdmin/></AdminPermision>
                    }
                ]
            },
            {
                path : ":eventscategory",
                children : [
                    {
                        path : ":subCategory",
                        element : <EventListPage/>
                    }
                ]
            },


        ]
    }
])
export default router