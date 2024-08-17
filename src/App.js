import React from 'react';
import './App.css';
import Navbar from './Navbar.jsx';
import TeamTitleCard from './Teams/teamTitleCard.jsx';
function App() {
  return (
      <>
        <Navbar />
        <div className='TeamTitleCard'>
          {/* <TeamTitleCard /> */}
        </div>
      </>
  );
}

export default App;
