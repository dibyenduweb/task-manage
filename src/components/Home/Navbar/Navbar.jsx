/* eslint-disable no-unused-vars */
//import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Navbar = () => {
    const {user, logOut} = useAuth();
  console.log(user);
    const handleLogOut = () =>{
        logOut()
        .then(() => console.log('your logged out now'))
        .catch(error => console.log(error))

    }

  const navLinks = <>
  <li><NavLink to="/">Home</NavLink></li>

  <li><NavLink to="/task">My Tasks</NavLink></li>

  <li><NavLink to="/contact">Contact</NavLink></li>
  
  {user &&
    <>
    
  <li><NavLink to="/dashboard">Dashboard</NavLink></li>
  <li><NavLink to="/profile">Profile</NavLink></li>
  

    </>
  }
    </>
    return (
      <div className="rounded-lg navbar shadow-xl fixed bg-base-100 z-10 max-w-screen-2xl mx-auto">
      <div className="navbar-start">
          <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navLinks}
              </ul>
          </div>
          {/* <a className=" font-bold normal-case lg:text-3xl">Task Management Platform</a> */}
          <img className='w-96' src={'https://i.ibb.co/kmCCmjd/3.png'} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
              {navLinks}
          </ul>
      </div>
      <div className='navbar-end'>
        {
            user ?
             <>
            <img className="w-14 rounded-full avatar" src={user?.photoURL} alt=''/>
           
            <span className='lg:mr-2'>{user?.displayName}</span>
            {/* <span>{user.email}</span> */}

            
            <a onClick={handleLogOut} className='btn btn-sm'>Sign out</a>

            </> 
            :
            <Link to='/login'>
                <button className='btn mr-10 btn-sm'>Login</button>
            </Link>
        }
      </div>
  </div>
);
};

export default Navbar;