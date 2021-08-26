import './App.css';
import React from 'react';
import SideBar from './components/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';
import Table from './components/Table/Table';
import BarChart from './components/BarChart/BarChart';

const App = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <div>
          <NavBar />
          <div style={{
            overflow: 'scroll', maxHeight: '93vh', display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}
          >
            <div style={{ width: '600px' }}>
              <BarChart />
            </div>
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
