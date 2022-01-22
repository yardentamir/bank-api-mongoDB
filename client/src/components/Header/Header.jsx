import React from 'react';
import "./style.css"
import { Link } from 'react-router-dom';
export default function Header() {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/loadUsers">load users</Link>
        </li>
        <li>
          <Link to="/loadUserByCash">load users by cash</Link>
        </li>
        <li>
          <Link to="/loadUserById">load user by id</Link>
        </li>
        <li>
          <Link to="/addUser">add user</Link>
        </li>
        <li>
          <Link to="/withdraw">withdraw</Link>
        </li>
        <li>
          <Link to="/transfer">transfer</Link>
        </li>
        <li>
          <Link to="/deposit">deposit</Link>
        </li>
        <li>
          <Link to="/updateCredit">update credit</Link>
        </li>
      </ul>
    </nav>

  )

}


    // {/* <main>
    //   <div className="side-bar">
    //     <div className="logo-top">
    //       <h1>לוגו</h1>
    //     </div>
    //     <ul className="nav-links">
    //       <Link to="/" style={{ width: '100%' }} >
    //         <li className="nav-tab active" data-view-name="create">
    //           <span>
    //             יצירה
    //           </span>
    //         </li>
    //       </Link>
    //       <Link to="/game" style={{ width: '100%' }} >
    //         <li className="nav-tab" data-view-name="load">
    //           <span>
    //             משחקים
    //           </span>
    //         </li>
    //       </Link>
    //       <li className="nav-tab" data-view-name="settings">
    //         <span>
    //           הגדרות
    //         </span>
    //       </li>
    //     </ul>
    //   </div>
    // </main> */}