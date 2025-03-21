import React from 'react';
import Sidebar from './Sidebar';


function Dashboard() {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="content">
        <h1>Welcome to the Dashboard!</h1>
        <p>Here is your overview...</p>
      </div>
    </div>
  );
}

export default Dashboard;
