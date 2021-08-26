import './App.css';
import React from 'react';
import SideBar from './components/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';
import Table from './components/Table/Table';

const App = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <div>
          <NavBar />
          <Table />
        </div>
      </div>
    </>
  );
};

export default App;
