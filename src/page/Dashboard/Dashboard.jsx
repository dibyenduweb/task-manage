// /* eslint-disable no-unused-vars */
// import React from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";

// const Dashboard = () => {
//     const { user } = useAuth();

//     return (
//         <div className="flex">
//             {/* dashboard side bar */}
//             <div className="lg:w-64 min-h-screen bg-slate-800 text-red-500 font-bold">
//                 <ul className="menu p-4">
//                     {
//                         user ? (
//                             <>
//                             <div className="flex gap-2 items-center py-2">
//                                 <img className="rounded-full w-14" src={user?.photoURL} alt="" />
//                                 <h1 className="text-white">{user?.displayName}</h1>
//                             </div>
//                                 <li>
//                                     <NavLink to="/dashboard/userboard">
//                                         Dashboard
//                                     </NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/dashboard/addtask">
//                                         Add Task
//                                     </NavLink>
//                                 </li>
//                             </>
//                         ) : null
//                     }
//                     {/* Defeault menus */}
//                     <div className="divider"></div>
//                     <>
//                         <li>
//                             <NavLink to="/">
//                                 Home
//                             </NavLink>
//                         </li>
                    
//                         <li>
//                             <NavLink to="/order/contact">
//                                 Contact
//                             </NavLink>
//                         </li>
//                     </>
//                 </ul>
//             </div>
//             {/* dashboard content */}
//             <div className="flex-1 p-8">
//                 <Outlet></Outlet>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;

// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";

// const Dashboard = () => {
//     const { user } = useAuth();
//     const [showSidebar, setShowSidebar] = useState(false);

//     const toggleSidebar = () => {
//         setShowSidebar(!showSidebar); // Fix: Toggle the value
//     };

//     return (
//         <div className={`flex ${showSidebar ? "" : "lg:pl-64"}`}>
//             {/* toggle button for mobile */}
//             <button
//                 className="lg:fixed top-4 left-4 z-50 p-2 text-white"
//                 onClick={toggleSidebar}
//             >
//                 {showSidebar ? "Hide" : "Show"} Sidebar
//             </button>

//             {/* dashboard side bar */}
//             {showSidebar && (
//                 <div className="lg:w-64 min-h-screen bg-slate-800 text-red-500 font-bold">
//                     <ul className="menu p-4">
//                         {user ? (
//                             <>
//                                 <div className="flex gap-2 items-center py-2">
//                                     <img
//                                         className="rounded-full w-14"
//                                         src={user?.photoURL}
//                                         alt=""
//                                     />
//                                     <h1 className="text-white">{user?.displayName}</h1>
//                                 </div>
//                                 <li>
//                                     <NavLink to="/dashboard/userboard">Dashboard</NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/dashboard/addtask">Add Task</NavLink>
//                                 </li>
//                             </>
//                         ) : null}
//                         {/* Default menus */}
//                         <div className="divider"></div>
//                         <>
//                             <li>
//                                 <NavLink to="/">Home</NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/order/contact">Contact</NavLink>
//                             </li>
//                         </>
//                     </ul>
//                 </div>
//             )}

//             {/* dashboard content */}
//             <div className="flex-1 p-8">
//                 <Outlet></Outlet>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FaAlignJustify } from "react-icons/fa";

const Dashboard = () => {
    const { user } = useAuth();
    const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 1024);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    useEffect(() => {
        const handleResize = () => {
            setShowSidebar(window.innerWidth >= 1024);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className={`flex ${showSidebar ? "" : "lg:pl-64"}`}>
            {/* toggle button for mobile */}
            <button
                className="fixed top-4 left-4 z-50 p-2 text-white lg:hidden"
                onClick={toggleSidebar}
            >
                <FaAlignJustify className="text-black text-3xl" />
            </button>

            {/* dashboard side bar */}
            {showSidebar && (
                <div className="lg:w-64 min-h-screen bg-slate-800 text-red-500 font-bold">
                    <ul className="menu p-4">
                        {user ? (
                            <>
                                <div className="flex gap-2 items-center py-10">
                                    <img
                                        className="rounded-full w-14"
                                        src={user?.photoURL}
                                        alt=""
                                    />
                                    <h1 className="text-white">{user?.displayName}</h1>
                                </div>
                                <li>
                                    <NavLink to="/dashboard/userboard">Dashboard</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addtask">Add Task</NavLink>
                                </li>y
                            </>
                        ) : null}
                        {/* Default menus */}
                        <div className="divider"></div>
                        <>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/order/contact">Contact</NavLink>
                            </li>
                        </>
                    </ul>
                </div>
            )}

            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;