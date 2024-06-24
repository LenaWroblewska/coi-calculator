import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MonthToolbar } from './Components/MonthToolbar';
import { DataTable } from './Components/DataTable';

function App() {
  return (
    <div>
      <DataTable />
      <MonthToolbar />
    </div>
  );
}

export default App;
