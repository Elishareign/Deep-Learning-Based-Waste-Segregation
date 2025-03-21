import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
