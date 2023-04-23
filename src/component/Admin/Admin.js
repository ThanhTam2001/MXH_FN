import Prosidebar from "./Prosidebar"
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Outlet } from "react-router-dom"

import './admin.scss'
const Admin = () => {

    return (
        <>
            <div className="menu_admin" >
                <div className="menu_left">

                    <ProSidebarProvider >
                        <Prosidebar />

                    </ProSidebarProvider>

                </div>
                <div className="menu_right" >
                    <Outlet />
                </div>

            </div>

        </>
    )
}


export default Admin